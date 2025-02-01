import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Ensure the environment variables are loaded

// MongoDB URI will be fetched from environment variables
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ ERROR: MONGODB_URI is not defined. Check your .env file.");
  process.exit(1); // Stop the application if there's no MongoDB URI
}

async function connectDB() {
  try {
    // Connect to MongoDB using mongoose (no need for useNewUrlParser and useUnifiedTopology)
    await mongoose.connect(uri);
    console.log("✅ Connected to MongoDB using Mongoose!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Stop the application if the DB connection fails
  }
}

export { connectDB };