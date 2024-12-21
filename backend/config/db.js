import mongoose from "mongoose";

export const connectDB = async () => {
  await mongoose
    .connect(
      // process.env.MONGO_URL
      'mongodb+srv://david:David321.@cluster0.wwfal.mongodb.net/food-delivery'
    ).then(() =>console.log("DB Connected"));
};
