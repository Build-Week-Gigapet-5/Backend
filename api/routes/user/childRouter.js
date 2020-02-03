const express = require("express");
const router = express.Router();
const childMod = require("../../models/children-model.js");
const foodMod = require("../../models/food-journal-model");
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
    const { id } = req.params;
    const child = await childMod.findChildById(id);
    res.status(200).json(child);
  } catch (err) {
    console.log(err);
    next();
  }
});

// * WORKS Get All foods by Child ID
router.get("/:id/food", restricted(), async (req, res, next) => {
  try {
    const { id } = req.params;
    const food = await foodMod.getByChildId(id);
    res.status(200).json(food);
  } catch (err) {
    console.log(err);
    next();
  }
});

module.exports = router;
