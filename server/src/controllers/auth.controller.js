import bcrypt from "bcrypt";
import User from "../db/models/user.models.js";
import jwt from "jsonwebtoken";

export const register = async (req, res) => {
  const { username, name, password } = req.body;

  try {
    if (!username || !name || !password) {
      return res.status(400).json({
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

export const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    validateFields(res, username, password);

    const user = await User.findOne({ username });

    if (!user) {
      return res.status(404).json({
        message: "Invalid credentials",
      });
    }

    const checked = bcrypt.compare(password, user.password);
    if (!checked) {
      return res.status(404).json({
        message: "Invalid credentials",
      });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET);

    return res.json({
      message: "User logged in successfully",
      token,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: "Error adding user",
    });
  }
};
export const logout = () => {};

const validateFields = (res, ...params) => {
  params.forEach((p) => {
    if (!p) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
  });
};
