const express = require('express');
const connectDB = require('./src/config/db');
require('dotenv').config();

connectDB();
const app = express();

// ✅ Middleware for debugging (Log all incoming requests)
app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.path} - Body:`, req.body);
    next();
});

// ✅ Middleware to parse JSON and URL-encoded requests
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// ✅ Register API routes
app.use('/api/movies', require('./src/routes/movieRoutes'));
app.use('/api/auth', require('./src/routes/authRoutes'));

const PORT = process.env.PORT || 5001;

// ✅ List all registered routes in the terminal
const listEndpoints = require('express-list-endpoints');
console.log("Registered Routes:", listEndpoints(app)); 

if (require.main === module) {
    app.listen(PORT, () => console.log(`✅ Server running on port ${PORT}`));
}


module.exports = app;
