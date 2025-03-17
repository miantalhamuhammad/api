const express = require('express');
const { register, login } = require('../controllers/authController');
const router = express.Router();


// ✅ Debugging Middleware: Logs every request to this route
router.use((req, res, next) => {
    console.log(`[AUTH ROUTE] ${req.method} ${req.path} - Body:`, req.body);
    next();
});
router.post('/register', register);
router.post('/login', login);

module.exports = router;
