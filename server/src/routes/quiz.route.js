import { Router } from "express";
import {
  addQuestion,
  createQuiz,
  getQuiz,
} from "../controllers/quiz.controller.js";
import { authmiddleware } from "../middlewares/auth.middleware.js";
import { AppRouter } from "../utils/AppRouter.js";

const router = Router();

router.get("/", getQuiz);
router.post("/", createQuiz);
router.put("/", addQuestion);

const quizRouter = new AppRouter({
  prefix: "/quiz",
  middlewares: [authmiddleware],
  router: router,
});
export default quizRouter;
