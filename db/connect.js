import mongoose from "mongoose";

// mongodb+srv://<username>:<password>@cluster0.1wzxjrk.mongodb.net/?retryWrites=true&w=majority
// Shailendra2011

const connectDB = (url) => {
  return mongoose.connect(url);
};

export default connectDB;
