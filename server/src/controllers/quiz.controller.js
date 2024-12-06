import Quiz from "../db/models/quiz.model.js";
export const getQuiz = async (req, res) => {
  const quizzes = await Quiz.find();
  return res.status(200).json({
    quizzes,
  });
};
