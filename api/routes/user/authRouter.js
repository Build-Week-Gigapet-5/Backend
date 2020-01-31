const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const express = require("express");
const secret = require("../../../secrets/secrets");
const userMod = require("../../models/users/users-model.js");
const router = express.Router();

router.post("/register", async (req, res, next) => {
  try {
    const user = await userMod.addUser(req.body);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    next();
  }
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userMod.findBy({ email }).first();
    const passwordValid = await bcrypt.compare(password, user.password);

    if (email && passwordValid) {
      const token = jwt.sign(
        {
          id: user.id,
          email: user.email
        },
        secret.jwt,
        { expiresIn: "14d" }
      );
      res.status(200).json({ token, message: `Welcome to Gigpet` });
    } else {
      res.status(401).json({ message: "invalid credentials" });
    }
  } catch (err) {
    next();
  }
});
module.exports = router;
