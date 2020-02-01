const bcrypt = require("bcryptjs");
const express = require("express");
const router = express.Router();
const userMod = require("../../models/users-model.js");
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
      // const token = generateToken(user);
      res.status(201).json({
        id: user.id,
        name: user.name,
        email: user.email
      });
    })
    .catch(err => {
      console.log(err, "register error");
      res.status(400).json({ message: "Something went wrong saving new user" });
      next();
    });
});

router.post("/login", (req, res, next) => {
  let { email, password } = req.body;

  userMod
    .findBy({ email })
    .first()
    .then(user => {
      if (user && bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res.status(200).json({ token, message: `Welcome to Gigpet` });
      } else {
        res.status(401).json({ message: "invalid credentials" });
      }
    })
    .catch(err => {
      res.status(500).json(err);
    });
});

module.exports = router;
