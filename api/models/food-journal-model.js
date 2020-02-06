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

// function getByChildId(id) {
//   return db("foods").where("children_id", id);
// }

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

// // ! Working on this one.
// function getCategoryByChildId(child_id) {
//   return db("foods as f")
//     .innerJoin("categories as c", "f.", "u.id")
//     .where({ users_id })
//     .select("ch.id", "ch.child_name", "ch.child_age", "u.name", "u.id");
// }

// // ! Working on date formatter to help. Knex query here

// function getCatByDate() {
//   return db("foods as f")
//     .join("children as ch", "f.children_id", "ch.id")
//     .join("categories as c", "f.category_id", "c.id")
//     .query()
//     .whereBetween("f.date", [2015 - 03 - 01, 2015 - 03 - 31])
//     .select();
// }

// SELECT f.food_name, f.children_id, f.category_id, f.qty, f.date, c.category_name, ch.child_name
// FROM foods as f
// JOIN children as ch ON f.children_id = ch.id
// JOIN categories as c ON f.category_id = c.id
// WHERE f.date BETWEEN "2015-03-01" AND "2015-03-31"

module.exports = {
  addFood,
  getAllFood,
  getByChildId,
  updateFood,
  removeFood,
  getCategories
  // getCatByDate
};
