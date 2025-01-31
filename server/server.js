import dotenv from 'dotenv';
dotenv.config(); 
import express from 'express';
import cors from 'cors';
import { MongoClient, ServerApiVersion } from 'mongodb';

const uri = process.env.MONGODB_URI;

if (!uri) {
  console.error("❌ ERROR: MONGODB_URI is not defined. Check your .env file.");
  process.exit(1); // Tumigil agad kung walang connection string
}
console.log("🔍 MONGODB_URI:", process.env.MONGODB_URI); // Debug log

const app = express();
app.use(cors());

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

connectDB();

app.get('/', (req, res) => {
  res.send('Server started on Port 4000');
});

app.listen(4000, () => {
  console.log('🚀 Server started on port 4000');
});
