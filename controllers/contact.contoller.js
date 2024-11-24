const express = require('express');
const router = express.Router();
const Message = require('../models/message'); 
const jwt = require('jsonwebtoken');

// POST route for submitting messages 
router.post('/contact/submit', authenticateJWT, async (req, res) => {
  const { title, message } = req.body;
  const userId = req.user.userId; 

  if (!title || !message) {
    return res.status(400).json({ message: 'Title and message are required' });
  }

  try {
    
    const newMessage = new Message({
      from: userId,  
      to: 'admin',   
      title,
      message,
      datetime: new Date().toUTCString(),
    });

    // Save the new message to the database
    await newMessage.save();
    res.status(200).json({ message: 'Message submitted successfully!' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while submitting the message' });
  }
});

// GET route for fetching message history 
router.get('/contact/history', authenticateJWT, async (req, res) => {
  const userId = req.user.userId; // Get the userId 

  try {
    
    const messages = await Message.find({ from: userId }).sort({ datetime: -1 });
    res.status(200).json(messages); 
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Server error while fetching message history' });
  }
});


module.exports = router;
