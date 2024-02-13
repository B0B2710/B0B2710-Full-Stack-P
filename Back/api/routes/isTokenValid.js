const express = require('express');
const jwt = require('jsonwebtoken');
const router = express.Router();
const JWT_SECRET = "secret"; 

router.post('/', async (req, res) => {
    try {
        // Retrieve the authorization header from the request
        const authHeader = req.headers.authorization;
        
        // Check if the authorization header exists
        if (!authHeader || !authHeader.startsWith('Bearer ')) {
            // If authorization header is missing or invalid, respond with an error
            return res.status(401).json({ error: 'Unauthorized' });
        }
        
        // Extract the token from the authorization header
        const token = authHeader.split(' ')[1];

        // Verify the token
        jwt.verify(token, JWT_SECRET);
        console.log(token);
        // Token is valid
        res.json({ valid: true });
    } catch (error) {
        // Token is invalid or expired
        res.json({ valid: false });
    }
});

module.exports = router;
