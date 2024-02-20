import  express  from "express";
import {getAllUsers, newUser} from "../controllers/users"

const router: express.Router = express.Router();

router.get('/login', getAllUsers);
router.post('/signup', newUser);

export default router;