import User from "../db/models/user.models.js";

export const getUser = (req, res) => {
  const user = req.user;
  return res.status(200).json({ user: user });
};
