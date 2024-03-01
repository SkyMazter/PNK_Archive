// src/server.ts
import express, { Request, Response } from 'express';
import userRouter from './routes/users';
import cors from 'cors';

const app = express();
const port = 3001;

//For frontend use
app.use(cors());
//Middleware
app.use(express.json());

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});

