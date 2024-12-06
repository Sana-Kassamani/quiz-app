import express from "express";
import dotenv from "dotenv";
import authRouter from "./routes/auth.routes.js";
import { connectToDb } from "./db/connection.js";
import { authmiddleware } from "./middlewares/auth.middleware.js";
import userRouter from "./routes/user.routes.js";
import quizRouter from "./routes/quiz.route.js";

const app = express();
app.use(express.json());
dotenv.config();
// app.get("/", (req, res) => {
//   res.json({
//     message: "Hello World",
//   });
// });
app.use("/auth", authRouter);
app.use("/user", authmiddleware, userRouter);
app.use("/quiz", authmiddleware, quizRouter);

app.listen(8080, async () => {
  console.log("Server connected at port ", 8080);
  await connectToDb();
});
