import { Router } from "express";
import {
  addQuestion,
  createQuiz,
  getQuiz,
} from "../controllers/quiz.controller.js";

const quizRouter = Router();

quizRouter.get("/", getQuiz);
quizRouter.post("/", createQuiz);
quizRouter.put("/", addQuestion);

export default quizRouter;
