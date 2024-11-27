const mongoose = require('mongoose');

const registrationSchema = new mongoose.Schema({
  student_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Student', required: true },
  course_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Course', required: true },
  term: { type: String, required: true }
});

module.exports = mongoose.model('Registration', registrationSchema);