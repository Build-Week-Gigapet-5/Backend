const db = require("../../../data/db.config");
// const bcrypt = require("bcryptjs");

function find() {
  return db("users").select("id", "name", "email");
}

function findById(id) {
  return db("users")
    .where({ id })
    .select(["id", "name", "email"])
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
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}
// async function addUser(user) {
//   const [id] = await db("users").insert(user, "id");
//   return findById(id);
// }

module.exports = {
  find,
  findById,
  findBy,
  addUser
};
