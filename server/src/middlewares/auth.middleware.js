import jwt from "jsonwebtoken";
import User from "../db/models/user.models.js";
export const authmiddleware = async (req, res, next) => {
  const authHeader = req.headers.authorization;
  try {
    if (!authHeader) {
      throw Error();
    }

    const array = authHeader.split(" ");
    if (array.length !== 2 || array[0] !== "Bearer") {
      throw Error();
    }
    const token = array[1];

    const payload = await jwt.verify(token, process.env.JWT_SECRET);

    const user = await User.findById(payload.id);
    if (!user) {
      throw Error();
    }
    req.user = user;
    return next();
  } catch (error) {
    return res.status(401).json({
      message: "Unathorized",
    });
  }
};
