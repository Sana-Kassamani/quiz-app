import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice.js";
import quizzesReducer from "./quizzes/slice.js";
import { createLogger } from "redux-logger";

const logger = createLogger();
const store = configureStore({
  reducer: {
    users: userReducer,
    quizzes: quizzesReducer,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export default store;
