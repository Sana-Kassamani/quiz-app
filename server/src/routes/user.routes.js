import { Router } from "express";
import { editScore, getUser } from "../controllers/user.controller.js";
import { authmiddleware } from "../middlewares/auth.middleware.js";
import { AppRouter } from "../utils/AppRouter.js";
const router = Router();

router.get("/", getUser);
router.post("/", editScore);

const userRouter = new AppRouter({
  prefix: "/user",
  middlewares: [authmiddleware],
  router: router,
});
export default userRouter;
