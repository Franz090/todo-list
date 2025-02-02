import express from 'express';
import cors from 'cors';
import { connectDB } from './config/db.js';
import userRoutes from './routes/userRoutes.js'; 

const app = express();
app.use(cors());
app.use(express.json()); // Para ma-handle ang JSON body requests

app.get('/', (req, res) => {
  res.send('Server started on Port 4000');
});

// Use API routes
app.use('/api', userRoutes);

// **Ensure database is connected first before starting the server**
async function startServer() {
  try {
    await connectDB(); // Hintayin muna ang database connection
    app.listen(4000, () => {
      console.log('🚀 Server started on port 4000');
    });
  } catch (error) {
    console.error('❌ Failed to connect to database. Server will not start.');
    process.exit(1);
  }
}

startServer();