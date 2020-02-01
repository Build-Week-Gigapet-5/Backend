const express = require("express");
const cors = require("cors");
const helmet = require("helmet");
const authRouter = require("../routes/auth/authRouter");
const userRouter = require("../routes/user/userRoute");
const childRouter = require("../routes/user/childRouter");

const server = express();

server.use(helmet());
server.use(cors());
server.use(express.json());

server.use("/auth", authRouter);
server.use("/auth/users", userRouter);
server.use("/auth/children", childRouter);

server.get("/", (req, res, next) => {
  res.status(200).json({ Message: "Welcome to Gigapet" });
});

server.use((err, req, res, next) => {
  console.log("error", err);

  res.status(500).json({ message: "Something went wrong" });
});

module.exports = server;
