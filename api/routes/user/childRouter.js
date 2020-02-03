const express = require("express");
const router = express.Router();
const childMod = require("../../models/children-model.js");
const restricted = require("../../middleware/auth-user-middleware");

// * Works Get all children
router.get("/", restricted(), async (req, res, next) => {
  try {
    const children = await childMod.findChildren();
    res.status(200).json(children);
  } catch (err) {
    console.log(err);
    next();
  }
});

// * Works Get Child by Childs id
router.get("/:id", restricted(), async (req, res, next) => {
  try {
    const id = req.params.id;
    const child = await childMod.findChildById(id);
    res.status(200).json(child);
  } catch (err) {
    console.log(err);
    next();
  }
});

module.exports = router;
