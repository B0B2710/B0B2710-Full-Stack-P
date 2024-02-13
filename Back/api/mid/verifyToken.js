const jwt = require('jsonwebtoken');
const JWT_SECRET = "secret";
const express = require('express');
const router = express.Router();
// Middleware to verify JWT token
router.post('/', async (req, res) => {
    // Get the token from the request headers, query parameters, or cookies
    const token = req.headers.authorization;

    if (!token) {
        return res.status(401).json({ error: 'Unauthorized: No token provided' });
    }

    // Verify the token
    jwt.verify(token, JWT_SECRET, (err, decoded) => {
        if (err) {
            return res.status(401).json({ error: 'Unauthorized: Invalid token' });
        }

        // Token is valid, proceed to the next middleware
        req.userId = decoded.userId; // Optionally, you can extract information from the decoded token
        next();
    });
})

module.exports = router;
