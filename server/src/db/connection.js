import mongoose from "mongoose";
export const connectToDb = async () => {
  try {
    await mongoose.connect(process.env.DATABASE_CONNECT);
    console.log("Connected to db");
  } catch (error) {
    console.log(error.message);
  }
};
