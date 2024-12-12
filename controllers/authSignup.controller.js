const bcrypt = require('bcryptjs');
const Student = require('../models/student.model');

exports.signup = async (req, res) => {
  try {
    console.log(req.body); // Log to check what data is being received

    //Testing1

    const { first_name, last_name, username, password, email, phone,birthday,  role = 'student' } = req.body; 
    
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      first_name,
      last_name,
      username,
      email,
      phone,
      birthday,
      hashed_password: hashedPassword,
      role
    });

    const student = await newStudent.save();
    res.status(201).json({ message: 'Student registered successfully', studentId: student._id });
  } catch (err) {
    res.status(500).json({ message: 'Error registering student', error: err.message });
  }
};
