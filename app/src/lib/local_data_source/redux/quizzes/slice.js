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

export const { loadQuizzes } = quizSlice.actions;

// updateAnswer: (current, { payload }) => {
//     return {
//       quizzes: current.quizzes.map((quiz) => {
//         if (quiz.id == payload.quizId) {
//           return {
//             ...quiz,
//             questions: quiz.questions.map((question, index) => {
//               if (index == payload.questionIndex) {
//                 return {
//                   ...question,
//                   userAnswer: payload.answer,
//                 };
//               }
//               return question;
//             }),
//           };
//         }
//         return quiz;
//       }),
//     };
//   },
