import { Schema, model, Types } from "mongoose";
import Quiz from "./quiz.model.js";

const userSchema = new Schema({
  username: {
    type: String,
    unique: true,
    required: true,
  },
  name: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
    select: false,
  },
  score: {
    type: Number,
    required: false,
    default: 0,
  },
  quizzes: [
    {
      type: Types.ObjectId,
      ref: Quiz,
    },
  ],
});

const User = model("User", userSchema);
export default User;
