const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const userMod = require("../../models/users/users-model");
const generateToken = require("./generateToken");

// using to test

router.get("/users", (req, res) => {
  userMod
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve recipes" });
    });
});

router.post("/register", (req, res, next) => {
  let user = req.body;
  user.password = bcrypt.hashSync(user.password, 6);
  userMod
    .addUser(user)
    .then(user => {
      const token = generateToken(user);
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email,
        token
      });
    })
    .catch(err => {
      console.log("reg err", err);
      next();
    });
});

router.post("/login", async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await userMod.findBy({ email }).first();
    const passwordValid = await bcrypt.compare(password, user.password);

    if (email && passwordValid) {
      const token = jwt.sign(
        {
          subject: user.id,
          name: user.name
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
