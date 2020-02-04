const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const userMod = require("../../models/users-model.js");
const generateToken = require("./generateToken");

// *Works Register new user
router.post("/register", async (req, res, next) => {
  try {
    const user = await userMod.addUser(req.body);
    res.status(201).json(user);
  } catch (err) {
    console.log(err, "reg error");
    next(err);
  }
});

// * Works Login user
router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userMod.findBy({ email }).first();
    if (user && bcrypt.compare(password, user.password)) {
      const token = generateToken(user);
      res
        .status(200)
        .json({ message: `Welcome ${user.name} to Gigpet`, token, user });
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (err) {
    console.log(err);
    next(err);
  }
});

module.exports = router;
