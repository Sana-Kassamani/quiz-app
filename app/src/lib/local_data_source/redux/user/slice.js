import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  name: "John Doe",
  score: 0,
  quizzes: [],
};

const userSlice = createSlice({
  name: "users",
  initialState: userInitialState,
  reducers: {
    loadUser: (current, action) => {},
    finishQuiz: (current, { payload }) => {
      const found = current.quizzes.find((q) => q.id === payload.id);
      if (found) {
        found.score = payload.score;
      } else {
        current.quizzes.push({
          id: payload.id,
          score: payload.score,
        });
      }
    },
    updateScore: (current, { payload }) => {
      var score = 0;
      current.quizzes.forEach((q) => {
        score += q.score;
      });
      return {
        ...current,
        score: score,
      };
    },
  },
});

export default userSlice.reducer;

export const { loadUser, updateScore, finishQuiz } = userSlice.actions;
