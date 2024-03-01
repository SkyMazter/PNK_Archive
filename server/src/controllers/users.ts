import express, { Request, Response } from "express";
import User from "../models/users";
import bcrypt from "bcrypt";
// import connection from "../connection";

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
  const { usrn, pswd }: { usrn: string; pswd: string } = req.body;
  const query = "INSERT INTO users (username, password) VALUES (?, ?)";

  //   try {
  //     await connection.query(query, [usrn, pswd], (error, result, fields) => {
  //       console.log("hi");
  //       res.status(200).json({ message: result });
  //       return;
  //     });
  //   } catch (error: any) {
  //     res.status(500);
  //     return res.json({
  //       error: "Failed to get users with unexpected error: ${error}",
  //     });
  //   }
};

const userLogin = async (res: Response, req: Request) => {
  const { username, password }: { username: string; password: string } =
    req.body;
  var handleEmpty: string = "";
  handleEmpty = !username ? "username" : "" || !password ? "password" : ""; //find missing parm

  //   const query = "SELECT * FROM users WHERE username= ?";

  if (handleEmpty) {
    res.status(400);
    return res.json({ error: `Failed to login missing field: ${handleEmpty}` });
  }

  const securedPwrd: string = await bcrypt.hash(password, 10);

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
        username: username,
        user_id: user.id,
      });
    } else {
      res.status(400);
      return res.json({ error: "Invalid username" });
    }
  } catch (error: any) {
    res.status(500);
    return res.json({ error: "Login Failed due to unkown error" });
  }

    // try {
    //   const user: any = await connection.query(
    //     query,
    //     [usrn, pswd],
    //     (error, result, fields) => {
    //       res.status(200);
    //       return res.json({ success: "Found User", usrn: usrn });
    //     }
    //   );

  //     if (user) {
  //       const correctPswd = await (pswd == user.password);
  //       if (!correctPswd) {
  //         res.status(400);
  //         return res.json({ error: "Failed to login invaild password" });
  //       }
  //       console.log("found user pt 2");
  //       res.status(200);
  //       return res.json({ success: "Login Successful" });
  //     } else {
  //       res.status(400);
  //       return res.json({ error: "Failed to login invaild credentials" });
  //     }
  //   } catch (error) {
  //     res.status(500);
  //     return res.json({
  //       error: "Failed to get users with unexpected error: ${error}",
  //     });
  //   }
};

export { getAllUsers, newUser, userLogin };
