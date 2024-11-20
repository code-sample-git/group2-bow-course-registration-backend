const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/student.model');

exports.signup = async (req, res) => {
  try {
    const { first_name, last_name, email, phone, birthday, username, password, program_id } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10);

    const newStudent = new Student({
      first_name,
      last_name,
      email,
      phone,
      birthday,
      username,
      hashed_password: hashedPassword,
      program_id
    });

    const student = await newStudent.save();
    res.status(201).json({ message: 'Student registered successfully', studentId: student._id });
  } catch (err) {
    res.status(500).json({ message: 'Error registering student', error: err.message });
  }
};
