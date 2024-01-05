import express from "express";

const router = express.Router();

//middleware
import { requireSignin } from "../middlewares/auth.js";

//controllers
import { register, login, secret } from "../controllers/auth.js";

router.post("/register", register);
router.post("/login", login);

//testing
router.get("/secret", requireSignin, secret);

export default router;
