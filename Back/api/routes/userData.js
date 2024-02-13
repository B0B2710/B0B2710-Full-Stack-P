// routes/signup.js
const connectDB = require('../db/dbConnect');
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
    const { username, password, name } = req.body;

    try {
        const token = req.headers.authorization?.split(' ')[1];
        
        if (!token) {
            return res.status(401).json({ error: 'Unauthorized' });
        }
        try {
            // Verify the token and extract the payload
            const decodedToken = jwt.verify(token, JWT_SECRET);
            
            // Access the user ID from the payload
            req.userId = decodedToken.userId; // Assuming the user ID is stored as userId in the token payload
            
            res
        } catch (error) {
            console.error('Error verifying token:', error);
            return res.status(400).json({ error: 'Invalid token' });
        }


    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;