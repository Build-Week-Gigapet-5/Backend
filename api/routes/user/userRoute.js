const express = require("express");
const router = express.Router();
const userMod = require("../../models/users-model.js");
const restricted = require("../../middleware/auth-user-middleware");
// * LH and Heroku works
router.get("/", (req, res) => {
  userMod
    .find()
    .then(users => {
      res.status(200).json(users);
    })
    .catch(err => {
      res.status(500).json({ message: "Failed to retrieve users" });
    });
});

// * LH and Heroku works
// router.get("/:id", restricted(), (req, res, next) => {
//   const id = req.params.id;
//   userMod
//     .findById(id)
//     .then(user => {
//       res.status(200).json(user);
//     })
//     .catch(err => {
//       console.log(err);
//       next();
//     });
// });

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
