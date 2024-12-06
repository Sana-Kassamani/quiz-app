import axios from "axios";

axios.defaults.baseURL = "http://127.0.0.1:8080/";

export const request = async ({ route, method = "GET", body }) => {
  try {
    const response = await axios.request({
      url: `${route}`,
      method,
      data: body,
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.token,
      },
    });

    return response.data;
  } catch (error) {
    console.log("======== Error =========");
    console.log(error);
    console.log("======== // =========");

    throw error;
  }
};
