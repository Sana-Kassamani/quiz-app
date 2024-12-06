import Quiz from "../db/models/quiz.model.js";
import { validateFields } from "../utils/validation.js";

export const getQuiz = async (req, res) => {
  const quizzes = await Quiz.find();
  return res.status(200).json({
    quizzes,
  });
};

export const createQuiz = async (req, res) => {
  const { title } = req.body.title;

  try {
    validateFields(title);
    const quiz = await Quiz.create({ title, questions: [] });

    return res.status(201).json({
      message: "quiz created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding user",
    });
  }
};
