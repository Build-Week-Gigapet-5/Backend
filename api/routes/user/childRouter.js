const express = require("express");
const router = express.Router();
const childMod = require("../../models/children-model.js");

// * Works on LH
//! Not on Heroku
router.get("/", (req, res, next) => {
  childMod
    .findChildren()
    .then(children => {
      res.status(200).json(children);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

// * Works on LH
//! Not on Heroku
router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  childMod
    .findChildById(id)
    .then(child => {
      res.status(200).json(child);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

module.exports = router;
