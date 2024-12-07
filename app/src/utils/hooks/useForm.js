import { useState, useEffect } from "react";
export const useForm = (initialValue) => {
  const [form, setForm] = useState(initialValue);
  const handleFormChange = (e) => {
    setForm((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  useEffect(() => {
    console.log(form);
  }, [form]);

  return { handleFormChange, form };
};
