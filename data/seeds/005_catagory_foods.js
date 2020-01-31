exports.seed = async knex => {
  await knex("category_foods").insert([
    {
      category_id: 1,
      food_id: 2
    },
    {
      category_id: 2,
      food_id: 1
    }
  ]);
};
