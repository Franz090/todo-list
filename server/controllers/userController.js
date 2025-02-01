import bcrypt from 'bcryptjs';
import User from '../models/User.js'; // Assuming you have a User model defined


export const createUser = async (req, res) => {
    const { firstName, lastName, email, password, confirmPassword } = req.body;

    // Validation: Ensure no fields are blank
    if (!firstName || !lastName || !email || !password || !confirmPassword) {
        return res.status(400).json({ message: 'All fields are required' });
    }

    // Email validation (basic example)
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: 'Invalid email format' });
    }

    // Password and Confirm Password match validation
    if (password !== confirmPassword) {
        return res.status(400).json({ message: 'Passwords do not match' });
    }

    try {
        // Check if user already exists
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(400).json({ message: 'User with this email already exists' });
        }

        // Hash the password using bcryptjs
        const salt = await bcrypt.genSalt(10); // Generate salt
        const hashedPassword = await bcrypt.hash(password, salt); // Hash the password

        // Create a new user and save to the database
        const newUser = new User({
            firstName,
            lastName,
            email,
            password: hashedPassword,
        });

        await newUser.save(); // Save user to the database

        return res.status(201).json({
            message: 'User created successfully',
            user: { firstName, lastName, email }
        });

    } catch (error) {
        console.error("Error creating user:", error); // Log the error to the console
        return res.status(500).json({ message: 'Error creating user', error: error.message });
    }
};

// Login user logic
export const loginUser = async (req, res) => {
    const { email, password } = req.body;

    // Validation for email and password
    if (!email || !password) {
        return res.status(400).json({ message: 'Email and password are required' });
    }

    try {
        // Get user data from the database based on the email
        const user = await User.findOne({ email });

        // If user does not exist, send error
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare the entered password with the hashed password in the database
        const isMatch = await bcrypt.compare(password, user.password);

        // If password does not match, send error
        if (!isMatch) {
            return res.status(400).json({ message: 'Invalid credentials' });
        }

        // Send success response
        return res.status(200).json({ message: 'Login successful', user: { email } });

    } catch (error) {
        return res.status(500).json({ message: 'Error logging in', error });
    }
};