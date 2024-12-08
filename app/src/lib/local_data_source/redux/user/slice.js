import { createSlice } from "@reduxjs/toolkit";
import { fetchUser } from "../../../remote_data_source/fetchUser";

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
  },
});

export default userSlice.reducer;

export const { updateScore, finishQuiz } = userSlice.actions;
