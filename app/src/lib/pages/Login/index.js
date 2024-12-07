import { Box } from "@mui/material";
import "./../../../ui/styles/app.css";
import { useEffect, useState } from "react";
import { useLogin } from "./services";

const Login = () => {
  const { handleFormChange, handleLogin, error } = useLogin();
  return (
    <div className="flex justify-center align-center full-height ">
      <div className="flex column gap">
        <div className="flex column gap10">
          <label>Username</label>
          <input
            type="text"
            name="username"
            placeholder="Enter Username..."
            className="input-text"
            onChange={handleFormChange}
          />
        </div>
        <div className="flex column gap10">
          <label>Password</label>
          <input
            type="password"
            placeholder="Enter Password..."
            name="password"
            className="input-text"
            onChange={handleFormChange}
          />
        </div>

        <button className="btn" onClick={handleLogin}>
          Login
        </button>
        {error && <p>error</p>}
      </div>
    </div>
  );
};

export default Login;
