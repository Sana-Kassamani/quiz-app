import { Schema, model, Types } from "mongoose";

const questionSchema = new Schema({
  content: {
    type: String,
    required: true,
  },
  type: {
    type: String,
    enum: ["mcq", "input"],
  },
  options: [
    {
      type: String,
    },
  ],
  correctAnswer: {
    type: String,
    required: true,
  },
  score: {
    type: Number,
    required: true,
  },
});
export default questionSchema;

export const Question = model("Question", questionSchema);
