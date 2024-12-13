const Student = require('../models/student.model');
const Course = require('../models/course.model');
const Registration = require('../models/registration.model');
const jwt = require('jsonwebtoken');

// Middleware to get student from token
const getStudentFromToken = async (req) => {
  const token = req.headers['authorization'].split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);

  
  //get the username from the token
  const username = decoded.username;
  const studentId = decoded.studentId;

  //if the username = admin, return all the students
  if(username == 'admin'){
    return await Student.find();
  }else{
    return await Student.findById(studentId);
  }
};

// Get student profile
async function getProfile(req, res){
  try {
    const student = await getStudentFromToken(req);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    console.log(err);
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
};

// Register for a course
async function registerCourse(req, res){
  try {
    const student = await getStudentFromToken(req);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    const { course_id, term } = req.body;
    const course = await Course.findById(course_id);

    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }

    // Check if the student is already registered for the course in the same term
    const existingRegistration = await Registration.findOne({ student_id: student._id, course_id, term });
    if (existingRegistration) {
      return res.status(400).json({ message: 'Student already registered for this course in the same term' });
    }

    // Register for the course
    const registration = new Registration({ student_id: student._id, course_id, term });
    await registration.save();

    res.status(201).json({ message: 'Course registered successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error registering course', error: err.message });
  }
};

// Get registered courses
async function getRegisteredCourses (req, res) {
  try {
    const student = await getStudentFromToken(req);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const registrations = await Registration.find({ student_id: student._id }).populate('course_id');
    res.status(200).json(registrations);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching registered courses', error: err.message });
  }
};

async function updateProfile(req, res){
  try {
    const student = await getStudentFromToken(req);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }

    const { first_name, last_name, email, phone, birthday, program, department } = req.body;
    student.first_name = first_name;
    student.last_name = last_name;
    student.email = email;
    student.phone = phone;
    student.birthday = birthday;
    student.program = program;
    student.department = department;

    await student.save();
    res.status(200).json({ message: 'Profile updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating profile', error: err.message });
  }
}


// Directory: models/registration.model.js
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const registrationSchema = new Schema({
  student_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Student',
    required: true
  },
  course_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Course',
    required: true
  },
  term: {
    type: String,
    required: true
  }
}, { timestamps: true });

// Use a conditional check to avoid OverwriteModelError
module.exports = mongoose.models.Registration || mongoose.model('Registration', registrationSchema);

module.exports.getProfile = getProfile;
module.exports.registerCourse = registerCourse;
module.exports.getRegisteredCourses = getRegisteredCourses;
module.exports.updateProfile = updateProfile;

