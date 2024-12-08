import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../../remote_data_source/fetchUser";
import { editScore } from "../../../remote_data_source/editScore";

const userInitialState = {
  name: "",
  score: 0,
  quizzes: [],
  isLoading: false,
  error: null,
};

const userSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  reducers: {
    finishQuiz: (current, { payload }) => {
      const { id, quizScore } = payload;

      const quizzes = current.quizzes.map((quiz) =>
        quiz.id === id ? { ...quiz, score: quizScore } : quiz
      );
      const isQuizPresent = current.quizzes.some((quiz) => quiz.id === id);
      if (!isQuizPresent) {
        quizzes.push({ id, score: quizScore });
      }

      return {
        ...current,
        quizzes,
      };
    },
    updateScore: (current, { payload }) => {
      const totalScore = current.quizzes.reduce((acc, q) => acc + q.score, 0);
      return {
        ...current,
        score: totalScore,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchUser.fulfilled, (state, action) => {
      state.isLoading = false;
      state.name = action.payload.name;
      state.score = action.payload.score;
    });
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
    builder.addCase(editScore.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(editScore.fulfilled, (state, action) => {
      state.isLoading = false;
    });
    builder.addCase(editScore.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.error.message;
    });
  },
});

export default userSlice.reducer;

export const { updateScore, finishQuiz } = userSlice.actions;
