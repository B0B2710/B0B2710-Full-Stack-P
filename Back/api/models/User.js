const mongoose = require("mongoose");

// Define the schema for the User model
const userSchema = new mongoose.Schema({
    name: String,
    username: String,
    password: String,
});

// Create the User model based on the schema
const User = mongoose.model("User", userSchema);

// Export the User model to be used in other files
module.exports = User;
