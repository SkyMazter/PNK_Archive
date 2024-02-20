// src/server.ts
import express, { Request, Response } from 'express';
import userRouter from './routes/users';


const app = express();
const port = 3001;


//Middleware
app.use(express.json());

app.use('/users', userRouter);

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
