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







app.listen(4000, async () => {
    connectDB(); 
    console.log('🚀 Server started on port 4000');
});
