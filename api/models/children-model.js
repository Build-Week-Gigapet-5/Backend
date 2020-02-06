const db = require("../../data/db.config");

function findChildren() {
  return db("children").select();
}

function findChildById(id) {
  return db("children")
    .where({ id })
    .first();
}

async function addChild(child, id) {
  const ids = await db("children").insert(child);
  ({ id: ids[0] });
}

module.exports = { findChildren, findChildById, addChild };
