import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { loadQuizzes } from "../../../lib/local_data_source/redux/quizzes/slice.js";
import { getQuizzes } from "../../../lib/remote_data_source/quizApi.js";

const QuizzesRoute = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const quizzes = getQuizzes();
    console.log("Quizzes route is called");
    dispatch(loadQuizzes(quizzes));
  }, []);

  return <Outlet />;
};

export default QuizzesRoute;
