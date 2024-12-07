import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadQuizzes } from "../../../lib/local_data_source/redux/quizzes/slice.js";
import { request } from "../../../utils/request";
import { loadUser } from "../../../lib/local_data_source/redux/user/slice.js";

const QuizzesRoute = () => {
  const [quizzes, setQuizzes] = useState([]);
  const dispatch = useDispatch();
  const getQuizzes = async () => {
    try {
      const response = await request({
        route: "/quiz",
      });
      console.log(response);

      if (response.status === 200) {
        setQuizzes(response.data.quizzes);
        dispatch(loadQuizzes(response.data.quizzes));
      }
    } catch (error) {
      console.log(error);
    }
  };
  const loadUserApi = async () => {
    try {
      const response = await request({
        route: "/user",
      });
      console.log(response);

      if (response.status === 200) {
        const user = response.data.user;
        dispatch(loadUser({ name: user.name, score: user.score }));
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    loadUserApi();
    getQuizzes();
    console.log("Quizzes route is called ", quizzes);
  }, []);

  return <Outlet />;
};

export default QuizzesRoute;
