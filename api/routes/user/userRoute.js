const express = require("express");
const router = express.Router();
const userMod = require("../../models/users-model.js");

router.get("/:id", (req, res, next) => {
  const id = req.params.id;
  userMod
    .findById(id)
    .then(user => {
      res.status(200).json(user);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});

router.get("/children", (req, res, next) => {
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

router.get("/:id/children", (req, res, next) => {
  const { id } = req.params;
  userMod
    .findChildrenByUserId(id)
    .then(children => {
      res.status(200).json(children);
    })
    .catch(err => {
      console.log(err);
      next();
    });
});
module.exports = router;
