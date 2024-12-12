const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/student.model');


exports.login = async (req, res) => {
  try {
    const { username, password } = req.body;

    // Find the student by username
    const student = await Student.findOne({ username: username });
    if (!student) {
      return res.status(404).json({ message: 'User not found' });
    }

    // Check if the password matches
    const isMatch = await bcrypt.compare(password, student.hashed_password);
    if (!isMatch) {
      return res.status(400).json({ message: 'Invalid credentials' });
    }

    // Generate a JWT token
    const token = jwt.sign(
      { studentId: student._id, username: student.username },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    //respond with token and role and the row sequence in database
    res.status(200).json({ token, 
      role: student.role, 
      id: student.studentId ,
      first_name : student.first_name, 
      last_name : student.last_name,
      username : student.username,
      email : student.email,
      phone : student.phone,
      birthday : student.birthday,
      program : student.program,
      department : student.department
    });

  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
