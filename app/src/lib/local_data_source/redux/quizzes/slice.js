import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { fetchQuizzes } from "../../../remote_data_source/fetchQuizzes";

const quizInitialState = {
  quizzes: [],
  isLoading: false,
  error: null,
};

const quizSlice = createSlice({
  name: "quizzes",
  initialState: quizInitialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchQuizzes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchQuizzes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.quizzes = action.payload.quizzes;
    });
    builder.addCase(fetchQuizzes.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default quizSlice.reducer;

// export const { loadQuizzes } = quizSlice.actions;

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
