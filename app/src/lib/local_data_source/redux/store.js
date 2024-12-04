import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./user/slice.js";
import quizzesReducer from "./quizzes/slice.js";

const store = configureStore({
  reducer: {
    users: userReducer,
    quizzes: quizzesReducer,
  },
});

export default store;
