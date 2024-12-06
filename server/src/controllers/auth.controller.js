import bcrypt from "bcrypt";
import User from "../db/models/user.models.js";

export const register = async (req, res) => {
  const { username, name, password } = req.body;

  if (!username || !name || !password) {
    res.status(400).json({
      message: "All fields are required",
    });
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, 10);

    const user = await User.create({
      username,
      hashed,
      name,
    });

    res.status(201).json({
      message: "All fields are required",
      user: user,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding user",
    });
  }
};
export const login = (req, res) => {
  res.json({
    message: "login",
  });
};
export const logout = () => {};
