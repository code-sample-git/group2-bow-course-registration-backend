const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const courseSchema = new Schema({
  code: {
    type: String,
    required: true,
    unique: true
  },
  name: {
    type: String,
    required: true
  },
  term: String,
  start_date: Date,
  end_date: Date,
  description: String,
  program_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program'
  }
}, { timestamps: true });

module.exports = mongoose.model('Course', courseSchema);
