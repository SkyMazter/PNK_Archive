import express from "express";
import { getAllUsers, newUser, userLogin } from "../controllers/users";

const router: express.Router = express.Router();

router.get("/all", getAllUsers);
router.post("/signup", newUser);
router.get("/login", userLogin);

export default router;
