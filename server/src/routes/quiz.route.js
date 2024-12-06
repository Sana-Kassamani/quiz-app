import { Router } from "express";
import { getQuiz } from "../controllers/quiz.controller.js";

const quizRouter = Router();

quizRouter.get("/", getQuiz);

export default quizRouter;
