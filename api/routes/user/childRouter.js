const express = require("express");
const router = express.Router();
const childMod = require("../../models/children-model.js");

// * Works Get all children
router.get("/", async (req, res, next) => {
  try {
    const children = await childMod.findChildren();
    res.status(200).json(children);
  } catch (err) {
    console.log(err);
    next();
  }
});

// * Works Get Child by Childs id
router.get("/:id", async (req, res, next) => {
  try {
    const id = req.params.id;
    const child = await childMod.findChildById(id);
    res.status(200).json(child);
  } catch (err) {
    console.log(err);
    next();
  }
});

// * WORKs Add child
// router.post("/addChild", (req, res, next) => {
//   const child = req.body;
//   childMod
//     .addChild(child)
//     .then(childData => {
//       res.status(201).json({ message: "New child added", childData });
//     })
//     .catch(err => {
//       console.log(err);
//       next();
//     });
// });

module.exports = router;
