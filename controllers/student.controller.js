const Student = require('../models/student.model');
const Course = require('../models/course.model');
const Registration = require('../models/registration.model');
const jwt = require('jsonwebtoken');

// Middleware to get student from token
const getStudentFromToken = async (req) => {
  const token = req.headers['authorization'].split(' ')[1];
  const decoded = jwt.verify(token, process.env.JWT_SECRET);
  return await Student.findById(decoded.id);
};

// Get student profile
exports.getProfile = async (req, res) => {
  try {
    const student = await getStudentFromToken(req);
    if (!student) {
      return res.status(404).json({ message: 'Student not found' });
    }
    res.status(200).json(student);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching profile', error: err.message });
  }
};

// Register for a course
exports.registerCourse = async (req, res) => {
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
exports.getRegisteredCourses = async (req, res) => {
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