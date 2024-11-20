const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const studentSchema = new Schema({
  first_name: {
    type: String,
    required: true
  },
  last_name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  phone: String,
  birthday: Date,
  username: {
    type: String,
    required: true,
    unique: true
  },
  hashed_password: {
    type: String,
    required: true
  },
  program_id: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Program'
  }
}, { timestamps: true });

module.exports = mongoose.model('Student', studentSchema);
