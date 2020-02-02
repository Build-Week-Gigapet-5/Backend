const express = require("express");
const router = express.Router();
const userMod = require("../../models/users-model.js");
const childMod = require("../../models/children-model");
const restricted = require("../../middleware/auth-user-middleware");

// * Works Get all users (Parents)
router.get("/", async (req, res, next) => {
  try {
    const users = await userMod.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    next();
  }
});

//* Work Get user(parent) by ID
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const user = await userMod.findById(id);
    res.status(200).json(user);
  } catch (err) {
    console.log(err);
    next();
  }
});

// * Works Get children of user(parent)
router.get("/:id/children", async (req, res, next) => {
  try {
    const { id } = req.params;
    const children = await userMod.findChildrenByUserId(id);
    res.status(200).json(children);
  } catch (err) {
    console.log(err);
    next();
  }
});

router.post("/addChild", (req, res, next) => {
  const child = req.body;
  childMod
    .addChild(child)
    .then(childData => {
      res.status(201).json({ message: "New child added", childData });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
