const db = require("../../../data/db.config");
const bcrypt = require("bcryptjs");

function find() {
  return db("users");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .select()
    .first();
}

function addUser(user) {
  return db("users")
    .insert(user, "id")
    .returning("*");
}

module.exports = {
  find,
  findById,
  findBy,
  addUser
};
