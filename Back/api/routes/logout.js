// routes/logout.js
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
    try {
        // Clear JWT token cookie
        res.clearCookie('jwtToken', { httpOnly: true });
        res.status(200).json({ message: 'Logout successful' });
    } catch (error) {
        console.error('Error logging out:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
