import { Request, Response } from "express";
import User from "../models/users";
import bcrypt from "bcrypt";


const getAllUsers = async (req: Request, res: Response) => {
  //   try {
  //     await connection.query("SELECT * FROM users", (error, results, fields) => {
  //       if (error) {
  //         res.status(500).send("Internal Server Error");
  //         throw error;
  //         return;
  //       }
  //       res.status(200);
  //       console.log(results);
  //       return res.json(results);
  //     });
  //   } catch (error: any) {
  //     res.status(500);
  //     return res.json({
  //       error: "Failed to get users with unexpected error: ${error}",
  //     });
  //   }
};

const newUser = async (req: Request, res: Response) => {
  const { username, password }: { username: string; password: string } =
    req.body;
  var handleEmpty: string = "";
  handleEmpty = !username ? "username" : "" || !password ? "password" : ""; //find missing parm

  //   const query = "SELECT * FROM users WHERE username= ?";

  if (handleEmpty) {
    res.status(400);
    return res.json({ error: `Failed to login missing field: ${handleEmpty}` });
  };

  if (username == password) {
    res.status(400);
    return res.json({ error: `Password and Username canot be the same` });
  };

  const user: any = await User.findOne({
    where: {
      username: username,
    },
  });

  if (user) {
    res.status(400);
    return res.json({ error: `Username is already taken` });
  }

  try {
    const securedPwrd: string = await bcrypt.hash(password, 10);

     await User.create({
      username: username,
      password: securedPwrd
    });

    res.status(200);
    return res.json({success: "New user created!"})
  } catch (error) {
    console.error(error);
  }

};

const userLogin = async (req: Request, res: Response) => {
 const {username, password}: {username: string, password: string} = req.body; 
  var handleEmpty: string = "";
  handleEmpty = !username ? "username" : "" || !password ? "password" : ""; //find missing parm


  if (handleEmpty) {
    res.status(400);
    return res.json({ error: `Failed to login missing field: ${handleEmpty}` });
  }


  try {
    const user: any = await User.findOne({
      where: {
        username: username,
      },
    });

    if (user) {
      const correctPswd = await bcrypt.compare(password, user.password);
      if (!correctPswd) {
        res.status(400);
        return res.json({ error: "Invalid password" });
      }
      res.status(200);
      return res.json({
        success: "login successful",
        username: user.username,
        user_id: user.id,
      });
    } else {
      res.status(400);
      return res.json({ error: "Invalid username" });
    }
    console.log("user found");

  } catch (error: any) {
    res.status(500);
    return res.json({ error: "Login Failed due to unkown error" });
  }
 
};

export { getAllUsers, newUser, userLogin };
