const express = require("express");
const app = express();
const mongoose = require("mongoose");
const {PORT} = require('./config');
const authRoutes = require("./routes/auth");
const todoRoutes = require("./routes/todo");
const cors = require("cors");
const dotenv = require('dotenv');
dotenv.config();

app.use(cors());
app.use(express.json());
app.use("/auth", authRoutes);
app.use("/todo", todoRoutes);

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})

mongoose.connect(`${process.env.MONGO_LINK}`, { dbName: "TodoApp" });
