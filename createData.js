const { MongoClient } = require('mongodb');

const uri = 'mongodb+srv://michaelngbusiness:shJl65bJ9LgKff4Z@cluster0.n74lf.mongodb.net/';
const client = new MongoClient(uri);

const courses = [
    { "id": 2, "courseCode": "CS 201", "courseName": "Data Structures and Algorithms", "term": "Spring", "year": "2025", "startDate": "01/01/2025", "endDate": "05/01/2025", "description": "This course covers data structures and algorithms in computer science." }
    , { "id": 3, "courseCode": "CS 301", "courseName": "Operating Systems", "term": "Spring", "year": "2025", "startDate": "01/01/2025", "endDate": "05/01/2025", "description": "This course covers operating systems and system programming." }
    , { "id": 4, "courseCode": "CS 401", "courseName": "Software Engineering", "term": "Spring", "year": "2025", "startDate": "01/01/2025", "endDate": "05/01/2025", "description": "This course covers software engineering principles and practices." }
    , { "id": 5, "courseCode": "CS 501", "courseName": "Artificial Intelligence", "term": "Spring", "year": "2025", "startDate": "01/01/2025", "endDate": "05/01/2025", "description": "This course covers artificial intelligence and machine learning." }
    , { "id": 6, "courseCode": "CS 601", "courseName": "Computer Networks", "term": "Spring", "year": "2025", "startDate": "01/01/2025", "endDate": "05/01/2025", "description": "This course covers computer networks and network programming." }
    , { "id": 7, "courseCode": "CS 701", "courseName": "Database Systems", "term": "Spring", "year": "2025", "startDate": "01/01/2025", "endDate": "05/01/2025", "description": "This course covers database systems and database management." }
    ,{ "id": 8, "courseCode": "CS 801", "courseName": "Web Development", "term": "Spring", "year": "2025", "startDate": "01/01/2025", "endDate": "05/01/2025", "description": "This course covers web development and web programming." }
    , { "id": 9, "courseCode": "CS 901", "courseName": "Cybersecurity", "term": "Spring", "year": "2025", "startDate": "01/01/2025", "endDate": "05/01/2025", "description": "This course covers cybersecurity and network security." }
    , { "id": 10, "courseCode": "CS 1001", "courseName": "Cloud Computing", "term": "Spring", "year": "2025", "startDate": "01/01/2025", "endDate": "05/01/2025", "description": "This course covers cloud computing and cloud services." }
    , { "id": 11, "courseCode": "CS 102", "courseName": "Programming Fundamentals", "term": "Fall", "year": "2024", "startDate": "09/01/2024", "endDate": "12/15/2024", "description": "This course introduces the basics of programming using Python." }
    , { "id": 12, "courseCode": "CS 202", "courseName": "Object-Oriented Programming", "term": "Fall", "year": "2024", "startDate": "09/01/2024", "endDate": "12/15/2024", "description": "This course covers object-oriented programming concepts using Java." }
    , { "id": 13, "courseCode": "CS 302", "courseName": "Discrete Mathematics", "term": "Fall", "year": "2024", "startDate": "09/01/2024", "endDate": "12/15/2024", "description": "This course covers discrete mathematical structures used in computer science." }
    , { "id": 14, "courseCode": "CS 402", "courseName": "Computer Architecture", "term": "Fall", "year": "2024", "startDate": "09/01/2024", "endDate": "12/15/2024", "description": "This course covers the fundamental concepts of computer architecture." }
    , { "id": 15, "courseCode": "CS 502", "courseName": "Machine Learning", "term": "Fall", "year": "2024", "startDate": "09/01/2024", "endDate": "12/15/2024", "description": "This course introduces machine learning algorithms and their applications." }
    , { "id": 16, "courseCode": "CS 602", "courseName": "Computer Graphics", "term": "Fall", "year": "2024", "startDate": "09/01/2024", "endDate": "12/15/2024", "description": "This course covers the basics of computer graphics and visualization." }
    , { "id": 17, "courseCode": "CS 702", "courseName": "Advanced Database Systems", "term": "Fall", "year": "2024", "startDate": "09/01/2024", "endDate": "12/15/2024", "description": "This course covers advanced topics in database systems." }
    , { "id": 18, "courseCode": "CS 802", "courseName": "Full-Stack Web Development", "term": "Fall", "year": "2024", "startDate": "09/01/2024", "endDate": "12/15/2024", "description": "This course covers full-stack web development using modern frameworks." }
    , { "id": 19, "courseCode": "CS 902", "courseName": "Ethical Hacking", "term": "Fall", "year": "2024", "startDate": "09/01/2024", "endDate": "12/15/2024", "description": "This course introduces ethical hacking techniques and practices." }
    , { "id": 20, "courseCode": "CS 1002", "courseName": "DevOps Fundamentals", "term": "Fall", "year": "2024", "startDate": "09/01/2024", "endDate": "12/15/2024", "description": "This course covers the fundamentals of DevOps practices." }
    , { "id": 21, "courseCode": "CS 103", "courseName": "Advanced Python Programming", "term": "Summer", "year": "2025", "startDate": "05/15/2025", "endDate": "08/15/2025", "description": "This course covers advanced topics in Python programming." }
    , { "id": 22, "courseCode": "CS 203", "courseName": "Mobile App Development", "term": "Summer", "year": "2025", "startDate": "05/15/2025", "endDate": "08/15/2025", "description": "This course introduces mobile app development using Android and iOS." }
    , { "id": 23, "courseCode": "CS 303", "courseName": "Linear Algebra for Computer Science", "term": "Summer", "year": "2025", "startDate": "05/15/2025", "endDate": "08/15/2025", "description": "This course covers linear algebra concepts used in computer science." }
    , { "id": 24, "courseCode": "CS 403", "courseName": "Compiler Design", "term": "Summer", "year": "2025", "startDate": "05/15/2025", "endDate": "08/15/2025", "description": "This course covers the design and implementation of compilers." }
    , { "id": 25, "courseCode": "CS 503", "courseName": "Deep Learning", "term": "Summer", "year": "2025", "startDate": "05/15/2025", "endDate": "08/15/2025", "description": "This course introduces deep learning techniques and neural networks." }
    , { "id": 26, "courseCode": "CS 104", "courseName": "Introduction to Algorithms", "term": "Winter", "year": "2025", "startDate": "01/05/2025", "endDate": "04/20/2025", "description": "This course introduces fundamental algorithms and problem-solving techniques." }
    , { "id": 27, "courseCode": "CS 204", "courseName": "Operating Systems Concepts", "term": "Winter", "year": "2025", "startDate": "01/05/2025", "endDate": "04/20/2025", "description": "This course covers essential concepts of operating systems." }
    , { "id": 28, "courseCode": "CS 304", "courseName": "Advanced Data Structures", "term": "Winter", "year": "2025", "startDate": "01/05/2025", "endDate": "04/20/2025", "description": "This course covers advanced data structures and their applications." }
    , { "id": 29, "courseCode": "CS 404", "courseName": "Computer Vision", "term": "Winter", "year": "2025", "startDate": "01/05/2025", "endDate": "04/20/2025", "description": "This course introduces computer vision and image processing concepts." }
    , { "id": 30, "courseCode": "CS 504", "courseName": "Natural Language Processing", "term": "Winter", "year": "2025", "startDate": "01/05/2025", "endDate": "04/20/2025", "description": "This course covers natural language processing techniques and tools." }
    , { "id": 31, "courseCode": "CS 105", "courseName": "Introduction to Programming in C++", "term": "Fall", "year": "2025", "startDate": "09/01/2025", "endDate": "12/15/2025", "description": "This course introduces programming using C++ and basic programming principles." }
    , { "id": 32, "courseCode": "CS 205", "courseName": "Introduction to Software Testing", "term": "Fall", "year": "2025", "startDate": "09/01/2025", "endDate": "12/15/2025", "description": "This course covers the basics of software testing, including test design and test case development." }
    , { "id": 33, "courseCode": "CS 305", "courseName": "Distributed Systems", "term": "Fall", "year": "2025", "startDate": "09/01/2025", "endDate": "12/15/2025", "description": "This course covers the principles and design of distributed systems." }
    , { "id": 34, "courseCode": "CS 405", "courseName": "Introduction to Robotics", "term": "Fall", "year": "2025", "startDate": "09/01/2025", "endDate": "12/15/2025", "description": "This course introduces the fundamentals of robotics and autonomous systems." }
    , { "id": 35, "courseCode": "CS 505", "courseName": "Big Data Analytics", "term": "Fall", "year": "2025", "startDate": "09/01/2025", "endDate": "12/15/2025", "description": "This course introduces concepts and tools for big data analysis." }
    , { "id": 36, "courseCode": "CS 605", "courseName": "Cryptography", "term": "Fall", "year": "2025", "startDate": "09/01/2025", "endDate": "12/15/2025", "description": "This course covers cryptographic techniques used to secure data and communications." }
    , { "id": 37, "courseCode": "CS 705", "courseName": "Quantum Computing", "term": "Fall", "year": "2025", "startDate": "09/01/2025", "endDate": "12/15/2025", "description": "This course provides an introduction to quantum computing and quantum algorithms." }
    , { "id": 38, "courseCode": "CS 805", "courseName": "Agile Software Development", "term": "Fall", "year": "2025", "startDate": "09/01/2025", "endDate": "12/15/2025", "description": "This course introduces agile methodologies for software development." }
    , { "id": 39, "courseCode": "CS 905", "courseName": "Information Security Management", "term": "Fall", "year": "2025", "startDate": "09/01/2025", "endDate": "12/15/2025", "description": "This course covers information security policies and management practices." }
    , { "id": 40, "courseCode": "CS 1005", "courseName": "Digital Forensics", "term": "Fall", "year": "2025", "startDate": "09/01/2025", "endDate": "12/15/2025", "description": "This course introduces the field of digital forensics and investigative techniques." }
    , { "id": 41, "courseCode": "CS 106", "courseName": "Data Visualization", "term": "Winter", "year": "2026", "startDate": "01/05/2026", "endDate": "04/20/2026", "description": "This course covers techniques and tools for visualizing data." }
    , { "id": 42, "courseCode": "CS 206", "courseName": "Cloud Infrastructure", "term": "Winter", "year": "2026", "startDate": "01/05/2026", "endDate": "04/20/2026", "description": "This course covers cloud infrastructure, including deployment and management." }
    , { "id": 43, "courseCode": "CS 306", "courseName": "Algorithm Design", "term": "Winter", "year": "2026", "startDate": "01/05/2026", "endDate": "04/20/2026", "description": "This course covers the design and analysis of efficient algorithms." }
    , { "id": 44, "courseCode": "CS 406", "courseName": "Game Development", "term": "Winter", "year": "2026", "startDate": "01/05/2026", "endDate": "04/20/2026", "description": "This course introduces game development using popular game engines." }
    , { "id": 45, "courseCode": "CS 506", "courseName": "Artificial Neural Networks", "term": "Winter", "year": "2026", "startDate": "01/05/2026", "endDate": "04/20/2026", "description": "This course covers artificial neural networks and deep learning techniques." }
    , { "id": 46, "courseCode": "CS 606", "courseName": "Advanced Cryptography", "term": "Winter", "year": "2026", "startDate": "01/05/2026", "endDate": "04/20/2026", "description": "This course explores advanced topics in cryptography." }
    , { "id": 47, "courseCode": "CS 706", "courseName": "Software Quality Assurance", "term": "Winter", "year": "2026", "startDate": "01/05/2026", "endDate": "04/20/2026", "description": "This course covers software quality assurance principles and practices." }
    , { "id": 48, "courseCode": "CS 806", "courseName": "Blockchain Technology", "term": "Winter", "year": "2026", "startDate": "01/05/2026", "endDate": "04/20/2026", "description": "This course introduces blockchain technology and its applications." }
    , { "id": 49, "courseCode": "CS 906", "courseName": "Digital Signal Processing", "term": "Winter", "year": "2026", "startDate": "01/05/2026", "endDate": "04/20/2026", "description": "This course covers digital signal processing techniques." }
    , { "id": 50, "courseCode": "CS 1006", "courseName": "IT Project Management", "term": "Winter", "year": "2026", "startDate": "01/05/2026", "endDate": "04/20/2026", "description": "This course covers project management principles for IT projects." }
    , { "id": 51, "courseCode": "CS 107", "courseName": "Introduction to Data Science", "term": "Spring", "year": "2026", "startDate": "05/01/2026", "endDate": "08/01/2026", "description": "This course introduces data science concepts and tools." }
    , { "id": 52, "courseCode": "CS 207", "courseName": "Real-Time Systems", "term": "Spring", "year": "2026", "startDate": "05/01/2026", "endDate": "08/01/2026", "description": "This course covers the principles of real-time computing systems." }
    , { "id": 53, "courseCode": "CS 307", "courseName": "Network Security", "term": "Spring", "year": "2026", "startDate": "05/01/2026", "endDate": "08/01/2026", "description": "This course covers network security principles and practices." }
    , { "id": 54, "courseCode": "CS 407", "courseName": "Augmented Reality", "term": "Spring", "year": "2026", "startDate": "05/01/2026", "endDate": "08/01/2026", "description": "This course introduces augmented reality technologies and development." }
    , { "id": 55, "courseCode": "CS 507", "courseName": "Advanced Machine Learning", "term": "Spring", "year": "2026", "startDate": "05/01/2026", "endDate": "08/01/2026", "description": "This course covers advanced topics in machine learning and AI." }
    , { "id": 56, "courseCode": "CS 607", "courseName": "Software Project Management", "term": "Spring", "year": "2026", "startDate": "05/01/2026", "endDate": "08/01/2026", "description": "This course covers the management of software development projects." }
    , { "id": 57, "courseCode": "CS 707", "courseName": "Introduction to Bioinformatics", "term": "Spring", "year": "2026", "startDate": "05/01/2026", "endDate": "08/01/2026", "description": "This course introduces bioinformatics and computational biology concepts." }
    , { "id": 58, "courseCode": "CS 807", "courseName": "Internet of Things (IoT)", "term": "Spring", "year": "2026", "startDate": "05/01/2026", "endDate": "08/01/2026", "description": "This course introduces IoT concepts and technologies." }
    , { "id": 59, "courseCode": "CS 907", "courseName": "Virtual Reality Development", "term": "Spring", "year": "2026", "startDate": "05/01/2026", "endDate": "08/01/2026", "description": "This course covers virtual reality development using VR tools and frameworks." }
    , { "id": 60, "courseCode": "CS 1007", "courseName": "Cloud Security", "term": "Spring", "year": "2026", "startDate": "05/01/2026", "endDate": "08/01/2026", "description": "This course covers cloud security practices and technologies." }
    , { "id": 61, "courseCode": "CS 108", "courseName": "Data Mining", "term": "Summer", "year": "2026", "startDate": "08/15/2026", "endDate": "12/01/2026", "description": "This course introduces data mining techniques and applications." }
    , { "id": 62, "courseCode": "CS 208", "courseName": "Operating Systems Development", "term": "Summer", "year": "2026", "startDate": "08/15/2026", "endDate": "12/01/2026", "description": "This course covers the development of operating systems." }
    , { "id": 63, "courseCode": "CS 308", "courseName": "Advanced Data Science", "term": "Summer", "year": "2026", "startDate": "08/15/2026", "endDate": "12/01/2026", "description": "This course covers advanced topics in data science and data analysis." }
    , { "id": 64, "courseCode": "CS 408", "courseName": "Parallel Programming", "term": "Summer", "year": "2026", "startDate": "08/15/2026", "endDate": "12/01/2026", "description": "This course introduces parallel programming techniques." }
    , { "id": 65, "courseCode": "CS 508", "courseName": "Reinforcement Learning", "term": "Summer", "year": "2026", "startDate": "08/15/2026", "endDate": "12/01/2026", "description": "This course covers reinforcement learning and applications in AI." }
    , { "id": 66, "courseCode": "CS 608", "courseName": "High Performance Computing", "term": "Summer", "year": "2026", "startDate": "08/15/2026", "endDate": "12/01/2026", "description": "This course covers high performance computing systems and programming." }
    , { "id": 67, "courseCode": "CS 708", "courseName": "Augmented Intelligence", "term": "Summer", "year": "2026", "startDate": "08/15/2026", "endDate": "12/01/2026", "description": "This course covers human-centered AI systems and augmented intelligence." },
    { "id": 68, "courseCode": "CS 808", "courseName": "Wearable Computing", "term": "Summer", "year": "2026", "startDate": "08/15/2026", "endDate": "12/01/2026", "description": "This course introduces wearable computing devices and their applications." }
    , { "id": 69, "courseCode": "CS 908", "courseName": "Computer Vision for Autonomous Systems", "term": "Summer", "year": "2026", "startDate": "08/15/2026", "endDate": "12/01/2026", "description": "This course covers computer vision applications in autonomous systems." }
    , { "id": 70, "courseCode": "CS 1008", "courseName": "AI Ethics and Policy", "term": "Summer", "year": "2026", "startDate": "08/15/2026", "endDate": "12/01/2026", "description": "This course explores the ethical and policy implications of artificial intelligence." }
];

async function run() {
    try {
        await client.connect();
        console.log('Connected to MongoDB');

        const database = client.db('test'); // Specify your database name here
        const collection = database.collection('courses'); // Specify your collection name here

        const result = await collection.insertMany(courses);
        console.log(`${result.insertedCount} courses were inserted.`);
    } catch (error) {
        console.error('Error inserting courses:', error);
    } finally {
        await client.close();
        console.log('Connection closed');
    }
}

run();
