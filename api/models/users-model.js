const db = require("../../data/db.config");
// const bcrypt = require("bcryptjs");

function find() {
  return db("users").select("id", "name", "email");
}

function findById(id) {
  return db("users")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

function addUser(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findChildrenByUserId(users_id) {
  return db("children as ch")
    .innerJoin("users as u", "ch.users_id", "u.id")
    .where({ users_id })
    .select("ch.id", "ch.child_name", "ch.child_age", "u.name", "u.id");
}

module.exports = {
  find,
  findById,
  findBy,
  addUser,
  findChildrenByUserId
};
