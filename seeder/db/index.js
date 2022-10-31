import mongoose from "mongoose";

const connectDB = (url) => {
  return mongoose.connect(url);
};

const closeDB = () => {
  mongoose.connection.close();
};

export { connectDB, closeDB };
