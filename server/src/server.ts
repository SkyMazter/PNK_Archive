// src/server.ts
import express, { Request, Response } from "express";
import userRouter from "./routes/users";
import cors from "cors";
import sequelize from "./connection";

const app = express();
const port = 3001;

//Middleware
app.use(express.json());
//For frontend use
app.use(cors());

//routes
app.use("/users", userRouter);

sequelize
  .sync()
  .then((): void => {
    app.listen(port, (): void => {
      console.log(`Server is running on port ${port}`);
    });
  })
  .catch((error: Error): void => {
    console.error("Error synchronizing database:", error);
  });
