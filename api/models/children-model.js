const db = require("../../data/db.config");

function findChildren() {
  return db("children").select();
}

function findChildById(id) {
  return db("children")
    .where({ id })
    .first();
}

module.exports = { findChildren, findChildById };
