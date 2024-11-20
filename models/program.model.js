const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const programSchema = new Schema({
  code: {
    type: String,
    required: true
  },
  department: {
    type: String,
    required: true
  },
  term: String,
  start_date: Date,
  end_date: Date,
  fees: {
    domestic: Number,
    international: Number
  },
  description: String
}, { timestamps: true });

module.exports = mongoose.model('Program', programSchema);
