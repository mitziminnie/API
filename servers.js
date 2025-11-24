import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";

import blogRoutes from "./Routes/blogRoutes.js";
import userRoutes from "./Routes/userRoutes.js";
import authRoutes from "./Routes/authRoutes.js"


// import cors
import cors from "cors"

dotenv.config();

const app = express();
// setup cors
// allow access from all website/frontend.

app.use(cors({origin:"http://localhost:2000",credentials:true}))

app.use(express.json({ limit: "10mb" }));
app.use("/uploads", express.static("uploads")); // serve uploaded files

app.get("/test", (req, res) => {
  res.send("<h1>Test Route Loaded</h1>");
});

app.use("/api/blogs", blogRoutes);
app.use("/api/user", userRoutes);

app.use((req, res) => {
  res.status(404).send("<h1>Route not found!</h1>");
});

const db = process.env.MONGO_URI;

async function dbConnection() {
  try {
    await mongoose.connect(db);
    console.log("Database connected successfully!");

    app.listen(2000, () => console.log("Server running at http://localhost:2000"));
  } catch (error) {
    console.log(error, "Failed to connect to DB");
  }
}

dbConnection();
