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
  return db("foods as f")
    .join("categories as c", "f.category_id", "c.id")
    .where("children_id", id);
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

module.exports = {
  addFood,
  getAllFood,
  getByChildId,
  updateFood,
  removeFood,
  getCategories,
  findById
};
