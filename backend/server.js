import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import postRoutes from "./routes/post.routes.js";
import userRoutes from "./routes/user.routes.js";
dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());

app.use(postRoutes);
app.use(userRoutes);
app.use(express.static("uploads"));

app.get("/", (req, res) => {
  res.send("Server running ");
});

const start = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    app.listen(8080, () => {
      console.log("server is running on port 8080");
    });
  } catch (error) {
    console.log("FULL ERROR:", error);
  }
};

start();
