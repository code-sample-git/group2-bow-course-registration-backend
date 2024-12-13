const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const mongoose = require('mongoose');
const cors = require('cors');


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

// Initialize the app
const app = express();

// Middleware
app.use(bodyParser.json());

// Import and use routes
const studentRoutes = require('./routes/student.routes');
const authRoutes = require('./routes/auth.routes');
const courseRoutes = require('./routes/course.routes');


app.use(cors());
app.use('/api/auth', authRoutes);
app.use('/api/students', studentRoutes);
app.use('/api/courses', courseRoutes);


// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
