// config/db.js
import { MongoClient, ServerApiVersion } from 'mongodb';

// MongoDB URI will be fetched from environment variables
const uri = process.env.MONGODB_URI;
connectDB(); // Connect to MongoDB when the server starts
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
  }
}

export { connectDB, client };
