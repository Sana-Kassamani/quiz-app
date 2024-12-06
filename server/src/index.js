import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";

app.use(express.json());
const app = express();
dotenv.config();
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });
app.use("/auth", authRouter);

app.listen(8080, () => {
  console.log("Server connected at port ", 8080);
  try {
    mongoose.connect(process.env.DATABASE_CONNECT);
    console.log("Connected to db");
  } catch (error) {
    console.log(error.message);
  }
});
