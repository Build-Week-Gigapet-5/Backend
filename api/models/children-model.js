const db = require("../../data/db.config");

function findChildren() {
  return db("children").select();
}

function findChildById(id) {
  return db("children")
    .where({ id })
    .first();
}

function addChild(child, id) {
  return db("children")
    .insert(child)
    .then(ids => {
      ({ id: ids[0] });
    });
}

module.exports = { findChildren, findChildById, addChild };
