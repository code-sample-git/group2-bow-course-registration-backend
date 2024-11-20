const express = require('express');
const router = express.Router();
const authController = require('../controllers/auth.controller');

// POST request for logging in
router.post('/login', authController.login);

module.exports = router;
