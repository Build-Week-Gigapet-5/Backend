const express = require("express");
const foodMod = require("../../models/food-journal-model.js");
const router = express.Router();

router.get("/", async (req, res, next) => {
  try {
    const food = await foodMod.getAllFood();
    res.status(200).json(food);
  } catch (err) {
    console.log(err);
    next();
  }
});

router.post("/addFood", (req, res, next) => {
  const food = req.body;
  foodMod
    .addFood(food)
    .then(data => {
      res.status(201).json({ message: "New food added" });
    })
    .catch(err => {
      console.log(err);
      next();
    });
});
module.exports = router;
