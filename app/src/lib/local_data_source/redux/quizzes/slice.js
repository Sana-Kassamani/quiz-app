import { createSlice } from "@reduxjs/toolkit";

const quizInitialState = {
  quizzes: [],
};

const quizSlice = createSlice({
  name: "quizzes",
  initialState: quizInitialState,
  reducers: {
    loadQuizzes: (current, { payload }) => {
      return {
        quizzes: payload,
      };
    },
  },
});

export default quizSlice.reducer;

const { loadQuizzes } = quizSlice.actions;
