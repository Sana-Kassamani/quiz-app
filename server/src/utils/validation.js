export const validateFields = (res, ...params) => {
  params.forEach((p) => {
    if (!p) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
  });
};
