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
    modifyScore: (current, { payload }) => {
      //const newScore
      return {
        ...current,
        score: payload,
      };
    },
    getUser: (current, action) => {},
  },
});

export default userSlice.reducer;

export const { loadUser, getUser, modifyScore } = userSlice.actions;
