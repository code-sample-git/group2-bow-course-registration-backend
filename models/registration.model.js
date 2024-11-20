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

module.exports = mongoose.model('Registration', registrationSchema);