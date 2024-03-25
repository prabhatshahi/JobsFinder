import mongoose from "mongoose";

const dbConnection = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: "MERN_STACK_JOB_SEEKING",
    })
    .then(() => {
      console.log("Connected to database");
    })
    .catch((error) => {
      console.error("Error connecting to database:", error);
    });
};

export default dbConnection;
