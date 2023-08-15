import express from "express";
const app = express();
import mongoose from "mongoose";
import {PORT} from './config';
import authRoutes from "./routes/auth";
import todoRoutes from "./routes/todo";
import cors from "cors";
import dotenv from 'dotenv';
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

mongoose.connect(`${process.env.MONGO_LINK}`, { dbName: "TodoApp" });
