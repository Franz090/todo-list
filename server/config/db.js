import { MongoClient, ServerApiVersion } from 'mongodb';
import dotenv from 'dotenv';

dotenv.config(); // Ensure the environment variables are loaded

// MongoDB URI will be fetched from environment variables
const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ ERROR: MONGODB_URI is not defined. Check your .env file.");
  process.exit(1); // Stop the application if there's no MongoDB URI
}

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function connectDB() {
  try {
    await client.connect();
    console.log("✅ Connected to MongoDB!");
  } catch (error) {
    console.error("❌ MongoDB connection error:", error);
    process.exit(1); // Stop the application if the DB connection fails
  }
}

export { connectDB, client };
