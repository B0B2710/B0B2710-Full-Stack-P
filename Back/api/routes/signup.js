// routes/signup.js
const { addUser } = require('../db/dbConnect');
const express = require('express');

const router = express.Router();
const bcrypt = require('bcrypt');



router.post('/', async (req, res) => {
    const { username, password, name } = req.body;

    try {
        // Check if all required fields are provided
        if (!username || !name || !password) {
            return res.status(400).json({ error: 'Missing username, name, or password' });
        }

        // Hash the password
        const saltRounds = 10; // Number of salt rounds
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Add the user to the database
        await addUser(name, hashedPassword, username);

        // Respond with success
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error adding user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});


module.exports = router;