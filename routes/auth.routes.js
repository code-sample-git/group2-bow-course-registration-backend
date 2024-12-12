const express = require('express');
const router = express.Router();
const authLoginController = require('../controllers/authLogin.controller');
const authSignupController = require('../controllers/authSignup.controller');

// POST request for logging in
router.post('/login', authLoginController.login);

// POST request for signup
router.post('/signup', authSignupController.signup);

// Route for getting all students
router.get('/students', authSignupController.getAllStudents);

module.exports = router;
