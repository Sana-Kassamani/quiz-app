import { Router } from "express";
import { login, register, logout } from "../controllers/auth.controller.js";
const authRouter = Router();

authRouter.post("/", login);
authRouter.post("/register", register);
authRouter.get("/logout", logout);

export default authRouter;
