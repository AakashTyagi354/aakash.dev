import mongoose from "mongoose";

let isConnected = false;

export const connectedDB = async () => {
  if (isConnected) return;

  try {
    const mongoURI = process.env.MONGO_URI;
    if (mongoURI == undefined) {
      console.error("MongoDB URI is not defined");
      return;
    }
    // Connect to MongoDB using Mongoose
    await mongoose.connect(process.env.MONGO_URI || "");

    // Set isConnected to true after successful connection
    isConnected = true;
    console.log("Connected to MongoDB");
  } catch (err) {
    console.error("Error connecting to MongoDB:", err);
  }
};
