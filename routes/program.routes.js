const express = require('express');
const router = express.Router();
const programController = require('../controllers/program.controller');

router.get('/', programController.getAllPrograms);

module.exports = router;
