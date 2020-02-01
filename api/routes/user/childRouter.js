const express = require("express");
const router = express.Router();
const userMod = require("../../models/users-model.js");

router.get("/", (req, res, next) => {
  userMod
    .findChildren()
    .then(children => {
      res.status(200).json(children);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  userMod
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
