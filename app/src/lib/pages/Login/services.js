import { useForm } from "../../../utils/hooks/useForm";
import { useState } from "react";
import { request } from "../../../utils/request";
import { requestMethods } from "../../../utils/enums/requestMethods";
import { useNavigate } from "react-router-dom";
export const useLogin = () => {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const { handleFormChange, form } = useForm({
    username: "",
    password: "",
  });
  const handleLogin = async () => {
    try {
      const response = await request({
        route: "/auth",
        method: requestMethods.POST,
        body: form,
      });
      console.log(response);
      if (response.status === 200) {
        localStorage.setItem("token", response.data.token);
        navigate("/home");
      }
    } catch (error) {
      console.log(error);
      setError(error.message);
    }
  };

  return { handleFormChange, error, handleLogin };
};
