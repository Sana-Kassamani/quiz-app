import React, { useEffect, useState } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import { fetchQuizzes } from "../../../lib/remote_data_source/fetchQuizzes.js";
import { fetchUser } from "../../../lib/remote_data_source/fetchUser.js";

const QuizzesRoute = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUser());
    dispatch(fetchQuizzes());
    console.log("Quizzes route is called ");
  }, [dispatch]);

  return <Outlet />;
};

export default QuizzesRoute;
