import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';

const app = express();
app.use(cors());

app.get('/', (req, res) => {
  res.send('Server started on Port 4000');
});

app.listen(4000, async () => {
  try {
    await connectDB(); // Ensure DB is connected before starting the server
    console.log('🚀 Server started on port 4000');
  } catch (error) {
    console.error('❌ Failed to start server due to database connection issues:', error);
    process.exit(1); // Exit the process if DB connection fails
  }
});
