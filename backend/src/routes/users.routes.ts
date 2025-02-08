import { Router } from "express";
import { signup, login, guestLogin } from "../controllers/user.controllers.js";

const router = Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/guest", guestLogin);

export default router;
