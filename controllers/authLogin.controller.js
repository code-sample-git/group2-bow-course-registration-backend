const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Student = require('../models/student.model');

// exports.signup = async (req, res) => {
//   try {
//     const { first_name, last_name, email, phone, birthday, username, password, program_id } = req.body;
//     const hashedPassword = await bcrypt.hash(password, 10);

//     const newStudent = new Student({
//       first_name,
//       last_name,
//       email,
//       phone,
//       birthday,
//       username,
//       hashed_password: hashedPassword,
//       program_id
//     });

//     const student = await newStudent.save();
//     res.status(201).json({ message: 'Student registered successfully', studentId: student._id });
//   } catch (err) {
//     res.status(500).json({ message: 'Error registering student', error: err.message });
//   }
// };

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

    res.status(200).json({ token });
  } catch (err) {
    res.status(500).json({ message: 'Server error', error: err.message });
  }
};
