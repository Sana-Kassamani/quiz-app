import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";

export const fetchQuizzes = createAsyncThunk("quiz/fetchQuizzes", async () => {
  try {
    const response = await request({
      route: "/quiz",
    });

    if (response.status === 200) {
      console.log("Load Quizzes : ", response);
      return response.data;
    }
  } catch (error) {
    console.log(error);
  }
});
