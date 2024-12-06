import { Router } from "express";
import { login, register, logout } from "../controllers/auth.controller.js";
import { AppRouter } from "../utils/AppRouter.js";
const router = Router();

router.post("/", login);
router.post("/register", register);
router.get("/logout", logout);

const authRouter = new AppRouter({
  prefix: "/auth",
  middlewares: [],
  router: router,
});
export default authRouter;
