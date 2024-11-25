const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const Program = require('./models/program');
const Course = require('./models/course');
const Student = require('./models/student');
const Registration = require('./models/registration');

// Connect to MongoDB
mongoose.connect('mongodb://localhost/school_management', {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => console.log('Connected to MongoDB'))
.catch((error) => console.error('Error connecting to MongoDB:', error));

// Sample data for Programs
const programsData = [
  {
    code: "CS101",
    department: "Computer Science",
    term: "Fall 2024",
    start_date: "2024-09-01",
    end_date: "2024-12-15",
    fees: { domestic: 5000, international: 15000 },
    description: "Introduction to Computer Science program."
  },
  {
    code: "ENG202",
    department: "Engineering",
    term: "Spring 2025",
    start_date: "2025-01-15",
    end_date: "2025-05-30",
    fees: { domestic: 6000, international: 16000 },
    description: "Fundamentals of Engineering."
  }
];

// Insert Programs
Program.insertMany(programsData)
  .then((programs) => {
    console.log('Programs inserted:', programs);
    
    // Insert Courses after Programs
    const coursesData = [
      {
        code: "CS201",
        name: "Data Structures",
        term: "Fall 2024",
        start_date: "2024-09-10",
        end_date: "2024-12-01",
        description: "Introduction to data structures.",
        program_id: programs[0]._id
      },
      {
        code: "ENG301",
        name: "Thermodynamics",
        term: "Spring 2025",
        start_date: "2025-01-20",
        end_date: "2025-04-25",
        description: "Basic thermodynamics concepts.",
        program_id: programs[1]._id
      }
    ];

    Course.insertMany(coursesData)
      .then((courses) => {
        console.log('Courses inserted:', courses);

        // Insert Students
        const hashedPassword = bcrypt.hashSync("password123", 10);

        const studentsData = [
          {
            first_name: "Jo",
            last_name: "Jo",
            email: "jo@example.com",
            phone: "1234567890",
            birthday: "2000-05-15",
            username: "jojo",
            hashed_password: hashedPassword,
            program_id: programs[0]._id
          },
          {
            first_name: "Do",
            last_name: "Do",
            email: "do@example.com",
            phone: "0987654321",
            birthday: "1999-11-20",
            username: "dodo",
            hashed_password: hashedPassword,
            program_id: programs[1]._id
          }
        ];

        Student.insertMany(studentsData)
          .then((students) => {
            console.log('Students inserted:', students);

            // Insert Registrations
            const registrationsData = [
              {
                student_id: students[0]._id,
                course_id: courses[0]._id,
                term: "Fall 2024"
              },
              {
                student_id: students[1]._id,
                course_id: courses[1]._id,
                term: "Spring 2025"
              }
            ];

            Registration.insertMany(registrationsData)
              .then(() => {
                console.log('Registrations inserted');
                mongoose.disconnect();
              })
              .catch((error) => {
                console.error('Error inserting registrations:', error);
                mongoose.disconnect();
              });
          })
          .catch((error) => {
            console.error('Error inserting students:', error);
            mongoose.disconnect();
          });
      })
      .catch((error) => {
        console.error('Error inserting courses:', error);
        mongoose.disconnect();
      });
  })
  .catch((error) => {
    console.error('Error inserting programs:', error);
    mongoose.disconnect();
  });
