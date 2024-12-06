import { Schema, model, Types } from "mongoose";
import questionSchema from "../schemas/question.schema.js";

const quizSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  questions: [questionSchema],
});

const Quiz = model("Quiz", quizSchema);
export default Quiz;
