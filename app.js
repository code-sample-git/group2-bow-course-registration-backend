const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
require('dotenv').config();

// Database connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('MongoDB connected successfully'))
  .catch(err => console.error('MongoDB connection error:', err));

// Import mongoose models to ensure they're properly compiled
require('./models/student.model');
require('./models/course.model');
require('./models/registration.model');
const studentRoutes = require('./routes/student.routes');
//const authRoutes = require('./routes/auth.routes');

const app = express();
app.use(bodyParser.json());

app.use('/api/students', studentRoutes);
//app.use('/api/auth', authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
