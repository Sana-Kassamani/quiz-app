import { createAsyncThunk } from "@reduxjs/toolkit";
import { request } from "../../utils/request";
import { requestMethods } from "../../utils/enums/requestMethods";

export const editScore = createAsyncThunk("user/editScore", async (score) => {
  try {
    const response = await request({
      route: "/user",
      method: requestMethods.POST,
      body: { score: score },
    });

    if (response.status === 200) {
      console.log("Score update in db");
      console.log(response.data.user);
    } else {
      throw Error();
    }
  } catch (error) {
    console.log(error);
  }
});
