const mongoose = require('mongoose');
require('dotenv').config();
const connectDB = require('./src/config/db');  // Import DB connection
const Movie = require('../models/Movie');  // Import Movie model

// Sample movie data
const movies = [
    { title: "Inception", director: "Christopher Nolan", genre: "Sci-Fi", releaseYear: 2010 },
    { title: "The Dark Knight", director: "Christopher Nolan", genre: "Action", releaseYear: 2008 },
    { title: "Interstellar", director: "Christopher Nolan", genre: "Sci-Fi", releaseYear: 2014 },
    { title: "Titanic", director: "James Cameron", genre: "Romance", releaseYear: 1997 },
];

const seedDatabase = async () => {
    try {
        await connectDB(); // Connect to MongoDB

        console.log("🗑 Deleting existing movies...");
        await Movie.deleteMany(); // Clear existing data

        console.log("📥 Inserting sample movies...");
        await Movie.insertMany(movies); // Insert sample data

        console.log("✅ Database seeded successfully!");
        mongoose.connection.close(); // Close DB connection
    } catch (error) {
        console.error("❌ Seeding error:", error);
        mongoose.connection.close();
    }
};

seedDatabase();
