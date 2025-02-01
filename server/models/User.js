import mongoose from 'mongoose';

// Define the schema for the user
const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true, // Ensures this field is required
    },
    lastName: {
        type: String,
        required: true, // Ensures this field is required
    },
    email: {
        type: String,
        required: true, // Ensures this field is required
        unique: true, // Ensures the email is unique in the database
        lowercase: true, // Ensures the email is stored in lowercase
    },
    password: {
        type: String,
        required: true, // Ensures this field is required
    },
}, {
    timestamps: true, // Automatically adds createdAt and updatedAt fields
});

// Create and export the User model based on the schema with the specific collection name
const User = mongoose.model('User', userSchema, 'user'); // 'user' is the collection name

export default User;
