import express from "express";
import authRouter from "./routes/auth.routes.js";
import userRouter from "./routes/user.routes.js";
import quizRouter from "./routes/quiz.route.js";
import { connectToDb } from "./db/connection.js";
import { initApp, registerRoutes } from "./utils/init.js";

const app = express();
initApp(app);
registerRoutes(app, authRouter, userRouter, quizRouter);
app.listen(8080, async () => {
  console.log("Server connected at port ", 8080);
  await connectToDb();
});
