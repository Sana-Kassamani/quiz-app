export const validateFields = (res, ...params) => {
  params.forEach((p) => {
    if (!p && p !== 0) {
      return res.status(400).json({
        message: "All fields are required",
      });
    }
  });
};
