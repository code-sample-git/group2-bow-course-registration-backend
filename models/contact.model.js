const mongoose = require('mongoose');

const replySchema = new mongoose.Schema({
  from: String,  
  message: String,
  datetime: { type: Date, default: Date.now },
});

const messageSchema = new mongoose.Schema({
  from: String,  
  to: String,    
  title: String,
  message: String,
  datetime: { type: Date, default: Date.now },
  replies: [replySchema],  
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
