exports.seed = async knex => {
  await knex("categories").insert([
    {
      category_name: "sugar",
      category_points: 1
    },
    {
      category_name: "oil",
      category_points: 1
    }
  ]);
};
