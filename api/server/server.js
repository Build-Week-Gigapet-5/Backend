const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const userRouter = require("../routes/user/authRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/api/auth/", userRouter);

server.get("/", (req, res, next) => {
  res.status(200).json({ Message: "Welcome to Gigapet" });
});

server.use((err, req, res, next) => {
  console.log("error", err);

  res.status(500).json({ message: "Something went wrong" });
});

module.exports = server;
