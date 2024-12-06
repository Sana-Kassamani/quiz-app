import bcrypt from "bcrypt";
import User from "../db/models/user.models.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, name, password } = req.body;

  if (!username || !name || !password) {
    res.status(400).json({
      req: req.body,
      message: "All fields are required",
    });
  }
  const pastUser = await User.findOne({ username });
  if (pastUser) {
    return res.status(500).send({
      message: "Username already registered",
    });
  }
  try {
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);

    const user = await User.create({
      username,
      password: hashed,
      name,
    });

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    res.status(201).json({
      message: "User added succesfully",
      user: user,
      token: token,
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
