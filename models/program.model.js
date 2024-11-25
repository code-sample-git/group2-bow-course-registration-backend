const mongoose = require('mongoose');

const programSchema = new mongoose.Schema({
  code: { type: String, required: true },
  department: { type: String, required: true },
  term: { type: String, required: true },
  start_date: { type: Date, required: true },
  end_date: { type: Date, required: true },
  fees: {
    domestic: { type: Number, required: true },
    international: { type: Number, required: true },
  },
  description: { type: String, required: true }
});

module.exports = mongoose.model('Program', programSchema);

