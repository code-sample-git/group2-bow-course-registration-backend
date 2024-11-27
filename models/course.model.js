const mongoose = require('mongoose');

const courseSchema = new mongoose.Schema({
  code: { type: String, required: true },
  name: { type: String, required: true },
  term: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  description: { type: String, required: true },
  program_id: { type: mongoose.Schema.Types.ObjectId, ref: 'Program', required: true }
});

module.exports = mongoose.model('Course', courseSchema);

