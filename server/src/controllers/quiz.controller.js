import Quiz from "../db/models/quiz.model.js";
import { Question } from "../db/schemas/question.schema.js";
import { validateFields } from "../utils/validation.js";

export const getQuiz = async (req, res) => {
  const quizzes = await Quiz.find();
  return res.status(200).json({
    quizzes,
  });
};

export const createQuiz = async (req, res) => {
  const { title } = req.body;

  try {
    validateFields(res, title);
    const quiz = await Quiz.create({ title, questions: [] });

    return res.status(201).json({
      message: "quiz created successfully",
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error creating quiz",
    });
  }
};

export const addQuestion = async (req, res) => {
  const { content, type, correctAnswer, score, quizId } = req.body;
  var { options } = req.body;
  try {
    var quiz = await Quiz.findById(quizId);
    if (!quiz) {
      return res.status(404).send({
        message: "Quiz not found",
      });
    }
    validateFields(res, content, type, correctAnswer, score);

    if (type === "mcq") {
      validateFields(options);
    } else {
      options = [];
    }

    const question = new Question({
      content,
      type,
      options,
      correctAnswer,
      score,
    });

    quiz.questions.push(question);
    await quiz.save();

    return res.status(201).json({
      message: "Question added successfully",
      quiz,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding question",
    });
  }
};
