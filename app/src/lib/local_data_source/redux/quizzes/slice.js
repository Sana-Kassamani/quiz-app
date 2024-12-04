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
    updateAnswer: (current, { payload }) => {
      return {
        quizzes: current.quizzes.map((quiz) => {
          if (quiz.id == payload.quizId) {
            return {
              ...quiz,
              questions: quiz.questions.map((question, index) => {
                if (index == payload.questionIndex) {
                  return {
                    ...question,
                    userAnswer: payload.answer,
                  };
                }
                return question;
              }),
            };
          }
          return quiz;
        }),
      };
    },
  },
});

export default quizSlice.reducer;

export const { loadQuizzes, updateAnswer } = quizSlice.actions;
