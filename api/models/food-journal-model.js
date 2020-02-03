const db = require("../../data/db.config");

function addFood(food, id) {
  return db("foods")
    .insert(food)
    .then(ids => {
      ({ id: ids[0] });
    });
}

function getAllFood() {
  return db("foods").select();
}

function getByChildId(id) {
  return db("foods").where("children_id", id);
}

function findById(id) {
  return db("foods")
    .where({ id })
    .first();
}

async function updateFood(id, food) {
  await db("foods")
    .where({ id })
    .update(food);
  return findById(id);
}

function removeFood(id) {
  return db("foods")
    .where({ id })
    .del();
}

function getCategories() {
  return db("categories").select();
}

// ! Working on this one.
function getCategoryByChildId(child_id) {
  return db("foods as f")
    .innerJoin("categories as c", "f.", "u.id")
    .where({ users_id })
    .select("ch.id", "ch.child_name", "ch.child_age", "u.name", "u.id");
}

module.exports = {
  addFood,
  getAllFood,
  getByChildId,
  updateFood,
  removeFood,
  getCategories
};
