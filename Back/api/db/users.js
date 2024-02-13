const connectDB = require('./connectDB');
const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
    name:String,
    username: String,
    password: String,
});

// Connect to the database
connectDB()
    .then(() => {
        console.log('Connected to the database successfully');
    })
    .catch((error) => {
        console.error('Error connecting to the database:', error.message);
    });

const User = mongoose.model('User', UserSchema);

// Function to add a user to the database
const addUser = async (userData) => {
    try {
        const user = new User(userData);
        await user.save();
        console.log('User added successfully');
    } catch (error) {
        console.error('Error adding user:', error.message);
    }
};

// Function to remove a user from the database
const removeUser = async (userId) => {
    try {
        // Find the user by userId and remove it
        const user = await User.findByIdAndRemove(userId);
        if (!user) {
            console.log('User not found');
        } else {
            console.log('User removed successfully');
        }
    } catch (error) {
        console.error('Error removing user:', error.message);
    }
};

module.exports = { addUser, removeUser };