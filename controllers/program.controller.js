const Program = require('../models/program.model');

exports.getAllPrograms = async (req, res) => {
  try {
    const programs = await Program.find();
    res.status(200).json(programs);
  } catch (err) {
    res.status(500).json({ message: 'Error fetching programs', error: err.message });
  }
};
