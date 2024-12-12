const mongoose = require('mongoose');

const studentSchema = new mongoose.Schema({
  first_name: { type: String, required: true },
  last_name: { type: String, required: true },
  email: { type: String, required: true },
  phone: { type: String, required: true },
  birthday: { type: Date, required: true },
  username: { type: String, required: true },
  hashed_password: { type: String, required: true },
  role: { type: String, required: true },
  studentId: { type: Number, required: true }
});

module.exports = mongoose.model('Student', studentSchema);

