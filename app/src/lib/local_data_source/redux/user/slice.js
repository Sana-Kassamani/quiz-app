import { createSlice } from "@reduxjs/toolkit";

const userInitialState = {
  name: "",
  score: "",
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

const { loadUser, getUser, modifyScore } = userSlice.actions;
