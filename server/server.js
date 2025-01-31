import dotenv from 'dotenv';
dotenv.config(); 
import express from 'express';
import cors from 'cors';


const app = express();
app.use(cors());



app.get('/', (req, res) => {
  res.send('Server started on Port 4000');
});

app.listen(4000, () => {
  console.log('🚀 Server started on port 4000');
});
