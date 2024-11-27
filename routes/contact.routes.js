const express = require('express');
const router = express.Router();
const contactController = require('../controllers/contact.contoller');

// Temporary: Comment out authentication middleware for testing
// const authenticateJWT = require('../middleware/authenticateJWT');

// Route for submitting messages (no JWT for testing)
router.post('/submit', contactController.submitMessage);

// Route for viewing message history (no JWT for testing)
router.get('/history', contactController.getMessageHistory);

module.exports = router;
