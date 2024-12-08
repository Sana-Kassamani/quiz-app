import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";

export const fetchUser = createAsyncThunk("user/fetchUser", async () => {
  try {
    const response = await request({
      route: "/user",
    });
    console.log(response);

    if (response.status === 200) {
      return response.data.user;
    }
  } catch (error) {
    console.log(error);
  }
});
