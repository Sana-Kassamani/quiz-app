import { Schema, model, Types } from "mongoose";

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
  //   quizzes: [{
  //     ref:
  //   }],
});

const User = model("User", userSchema);
export default User;
