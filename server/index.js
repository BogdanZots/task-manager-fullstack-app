require("dotenv").config();

const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const mongoose = require("mongoose");
const router = require("./router/index");
const PORT = process.env.PORT || 6000;

const app = express();
app.use(express.json());
app.use(cookieParser());
app.use(
  cors({
    credentials: true,
    origin: process.env.CLIENT_URL,
  })
);
app.use("/api", router);
const start = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://BohdanZots:7710@cluster0.q7shw.mongodb.net/myFirstDatabase?retryWrites=true&w=majority"
    );
    app.listen(PORT, () => console.log(`server started at ${PORT} port`));
  } catch (e) {
    console.log(e);
  }
};
start();
