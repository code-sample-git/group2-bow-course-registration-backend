// Directory: routes/course.routes.js
const express = require('express');
const router = express.Router();
const courseController = require('../controllers/course.controller');

// Define default controller methods to handle undefined cases
courseController.getCourse = courseController.getCourse || ((req, res) => res.status(500).send('getCourse not implemented'));
courseController.registerCourse = courseController.registerCourse || ((req, res) => res.status(500).send('registerCourse not implemented'));
courseController.getRegisteredCourses = courseController.getRegisteredCourses || ((req, res) => res.status(500).send('getRegisteredCourses not implemented'));

// Ensure all controller methods are defined properly


// Course Routes
router.get('', (req, res, next) => {
  if (typeof courseController.getAllCourses !== 'function') {
    return next(new Error('getCourse is not defined correctly'));
  }
  courseController.getAllCourses(req, res, next);
});
router.delete('/:id', (req, res, next) => {
  if (typeof courseController.deleteCourse !== 'function') {
    return next(new Error('deleteCourse is not defined correctly'));
  }
  courseController.deleteCourse(req, res, next);
});

// Get course details
router.post('/register', (req, res, next) => {
  if (typeof courseController.registerCourse !== 'function') {
    return next(new Error('registerCourse is not defined correctly'));
  }
  courseController.registerCourse(req, res, next);
});  // Register for a course
router.get('/registered', (req, res, next) => {
  if (typeof courseController.getRegisteredCourses !== 'function') {
    return next(new Error('getRegisteredCourses is not defined correctly'));
  }
  courseController.getRegisteredCourses(req, res, next);
});  // Get registered courses

module.exports = router;