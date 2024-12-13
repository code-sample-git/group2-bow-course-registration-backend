const Course = require('../models/course.model');
const Program = require('../models/program.model');

async function getAllCourses(req, res) {
  try {
    const courses = await Course.find();
    res.status(200).json(courses);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching courses', error: err.message });
  }
}

async function getCourse(req, res) {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    res.status(200).json(course);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching course', error: err.message });
  }
}

async function createCourse(req, res) {
  try {
    const program = await Program.findById(req.body.program_id);
    if (!program) {
      return res.status(404).json({ message: 'Program not found' });
    }
    const course = new Course({
      name: req.body.name,
      code: req.body.code,
      description: req.body.description,
      program_id: req.body.program_id,
    });
    await course.save();
    res.status(201).json({ message: 'Course created successfully' });
    }
    catch (err) {
        res.status(500).json({ message: 'Error creating course', error: err.message });
        }
}

async function updateCourse(req, res) {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    course.name = req.body.name;
    course.code = req.body.code;
    course.description = req.body.description;
    course.program_id = req.body.program_id;
    await course.save();
    res.status(200).json({ message: 'Course updated successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error updating course', error: err.message });
  }
}

async function deleteCourse(req, res) {
  try {
    const course = await Course.findById(req.params.id);
    if (!course) {
      return res.status(404).json({ message: 'Course not found' });
    }
    await course.remove();
    res.status(200).json({ message: 'Course deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Error deleting course', error: err.message });
  }
}

module.exports = {
  getAllCourses,
  getCourse,
  createCourse,
  updateCourse,
  deleteCourse
};
