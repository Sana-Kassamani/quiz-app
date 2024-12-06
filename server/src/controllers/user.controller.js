import User from "../db/models/user.models.js";
import { validateFields } from "../utils/validation.js";

export const getUser = (req, res) => {
  const user = req.user;
  return res.status(200).json({ user: user });
};

export const editScore = async (req, res) => {
  const { score } = req.body;
  const user = req.user;
  try {
    validateFields(res, score, user);
    user.score = score;
    await user.save();
    return res.status(200).json({
      message: "Score updated successfully",
      user: user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Error updating score",
    });
  }
};
