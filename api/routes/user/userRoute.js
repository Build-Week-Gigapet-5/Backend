const express = require("express");
const router = express.Router();
const userMod = require("../../models/users-model.js");
const childMod = require("../../models/children-model");
const restricted = require("../../middleware/auth-user-middleware");

// * Works Get all users (Parents)
router.get("/", restricted(), async (req, res, next) => {
  try {
    const users = await userMod.find();
    res.status(200).json(users);
  } catch (err) {
    console.log(err);
    next();
  }
});

//* Work Get user(parent) by ID
router.get("/:id", restricted(), async (req, res, next) => {
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
router.get("/:id/children", restricted(), async (req, res, next) => {
  try {
    const { id } = req.params;
    const children = await userMod.findChildrenByUserId(id);
    res.status(200).json(children);
  } catch (err) {
    console.log(err);
    next();
  }
});

// * Works Add child
router.post("/addChild", restricted(), async (req, res, next) => {
  const { child_name, users_id } = req.body;
  try {
    if (!child_name || !users_id) {
      res.status(400).json({ message: "Information is missing" });
    } else {
      const child = await childMod.addChild(req.body);
      res.status(201).json({ message: `${child_name} has been added!`, child });
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
