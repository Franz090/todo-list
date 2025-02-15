import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser'; 
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js';
import { errorHandler } from './middleware/errorMiddleware.js';

// Load Environment Variables
dotenv.config();

// Initialize Express App
const app = express();

// Middleware
app.use(cors({ credentials: true, origin: process.env.CLIENT_URL }));
app.use(express.json());
app.use(cookieParser()); // Added for token handling

// Connect to Database
connectDB().then(() => console.log('✅ Database connected successfully')).catch(err => {
  console.error('❌ Database connection error:', err);
  process.exit(1);
});

// Routes
app.get('/', (req, res) => res.send('🚀 Server is running!'));
app.use('/api', userRoutes);

// Global Error Handler
app.use(errorHandler);

// Set Port from .env or Default to 4000
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`🚀 Server started on port ${PORT}`));
