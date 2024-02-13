// routes/signup.js
const connectDB = require('../db/dbConnect');
const express = require('express');
const User = require('../models/User');
const router = express.Router();
const bcrypt = require('bcrypt');


router.post('/', async (req, res) => {
    const { username, password, name } = req.body;

    try {
        console.log("creating user")
        // Check if the username already exists in the database
        const existingUser = await User.findOne({ username });

        if (existingUser) {
            return res.status(400).json({ error: 'Username already exists' });
        }

        // Hash the password
        const saltRounds = 10; // Number of salt rounds
        const hashedPassword = await bcrypt.hash(password, saltRounds);

        // Create a new user instance
        const newUser = new User({
            name,
            username,
            password: hashedPassword
        });
        console.log(newUser)

        // Save the user to the database
        await newUser.save();

        // Respond with a success message
        res.status(201).json({ message: 'User created successfully' });
    } catch (error) {
        console.error('Error creating user:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;