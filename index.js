import express from 'express';
import cors from 'cors';  
import authRouter from './routes/auth.js';
import connectToDatabase from './db/db.js'; 

const app = express();

// 2. Connect to the Database
connectToDatabase(); 

app.use(cors());  
app.use(express.json());  

app.use('/api/auth', authRouter);

app.listen(5000, () => {
  console.log('Server is running on port 5000');
});