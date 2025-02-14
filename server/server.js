import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';

// Load Environment Variables
dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.get('/', (req, res) => res.send('Server started on Port 4000'));
app.use('/api', userRoutes);

// Start Server
app.listen(4000, async () => {
  await connectDB();
  console.log('🚀 Server started on port 4000');
});
