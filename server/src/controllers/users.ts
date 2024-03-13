import { Request, Response } from "express";
import User from "../models/users";
import bcrypt from "bcrypt";

const getAllUsers = async (req: Request, res: Response) => {

};

const newUser = async (req: Request, res: Response): Promise<Response> => {
  const { username, password }: { username: string; password: string } =
    req.body;
  var handleEmpty: string = "";
  handleEmpty = !username ? "username" : "" || !password ? "password" : ""; //find missing parm

  if (handleEmpty) {
    res.status(400);
    return res.json({ error: `Failed to register due to missing field: ${handleEmpty}` });
  }

  if (username == password) {
    res.status(400);
    return res.json({ error: `Password and Username cannot be the same` });
  }

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
      password: securedPwrd,
    });

    res.status(200);
    return res.json({ success: "New user created!" });
  } catch (error) {
    res.status(400);
    return res.json({ error: `failed to register due to unknown error` });
  }
};

const userLogin = async (req: Request, res: Response): Promise<Response> => {
  const { username, password }: { username: string; password: string } =
    req.body;
  var handleEmpty: string = "";
  handleEmpty = !username ? "username" : "" || !password ? "password" : ""; //find missing parm

  if (handleEmpty) {
    res.status(400);
    return res.json({ error: `Failed to login due to missing field: ${handleEmpty}` });
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
        success: "Login successful",
        username: user.username,
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
};

export { getAllUsers, newUser, userLogin };
