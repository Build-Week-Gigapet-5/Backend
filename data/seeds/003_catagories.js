exports.seed = async knex => {
  await knex("categories").del();
  await knex("categories").insert([
    {
      category_name: "Vegetable",
      category_points: 5
    },
    {
      category_name: "Fruits",
      category_points: 5
    },
    {
      category_name: "Protein",
      category_points: 2
    },
    {
      category_name: "Grains",
      category_points: 2
    },
    {
      category_name: "Dairy",
      category_points: 3
    },
    {
      category_name: "Snacks",
      category_points: 0
    }
  ]);
};
