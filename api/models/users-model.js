const db = require("../../data/db.config");
const bcrypt = require("bcryptjs");

function find() {
  return db("users").select("id", "name", "email");
}

function findById(id) {
  return db("users")
    .select("id", "name", "email")
    .where({ id })
    .first();
}

function findBy(filter) {
  return db("users")
    .where(filter)
    .first();
}

async function addUser(user) {
  user.password = await bcrypt.hash(user.password, 5);
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function findChildrenByUserId(users_id) {
  return db("users as u")
    .join("children as ch", "u.id", "ch.users_id")
    .where("ch.users_id", users_id);
  // .returning("*")  aslso removed select() But seems to work with empty select()
}

module.exports = {
  find,
  findById,
  findBy,
  addUser,
  findChildrenByUserId
};
