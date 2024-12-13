// Directory: routes/student.routes.js
const express = require('express');
const router = express.Router();
const studentController = require('../controllers/student.controller');

// Define default controller methods to handle undefined cases
studentController.getProfile = studentController.getProfile || ((req, res) => res.status(500).send('getProfile not implemented'));
studentController.registerCourse = studentController.registerCourse || ((req, res) => res.status(500).send('registerCourse not implemented'));
studentController.getRegisteredCourses = studentController.getRegisteredCourses || ((req, res) => res.status(500).send('getRegisteredCourses not implemented'));

// Ensure all controller methods are defined properly


// Student Routes
router.get('/profile', (req, res, next) => {
  if (typeof studentController.getProfile !== 'function') {
    return next(new Error('getProfile is not defined correctly'));
  }
  studentController.getProfile(req, res, next);
});  // Get student profile

router.put('/profile', (req, res, next) => {
  if (typeof studentController.updateProfile !== 'function') {
    return next(new Error('updateProfile is not defined correctly'));
  }
  studentController.updateProfile(req, res, next);
});  // Update student profile

router.post('/register-course', (req, res, next) => {
  if (typeof studentController.registerCourse !== 'function') {
    return next(new Error('registerCourse is not defined correctly'));
  }
  studentController.registerCourse(req, res, next);
});  // Register for a course
router.get('/registered-courses', (req, res, next) => {
  if (typeof studentController.getRegisteredCourses !== 'function') {
    return next(new Error('getRegisteredCourses is not defined correctly'));
  }
  studentController.getRegisteredCourses(req, res, next);
});  // Get registered courses

module.exports = router;