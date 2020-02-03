exports.seed = async knex => {
  await knex("foods").del();
  await knex("foods").insert([
    {
      food_name: "Oatmeal",
      qty: 1,
      // date format YYYY-MM-DD
      date: "2015-03-06",
      children_id: 1,
      category_id: 4
    },
    {
      food_name: "Banana",
      qty: 1,
      // date format YYYY-MM-DD
      date: "2015-03-07",
      children_id: 1,
      category_id: 2
    },
    {
      food_name: "Chicken Nuggets",
      qty: 1,
      // date format YYYY-MM-DD
      date: "2015-04-06",
      children_id: 3,
      category_id: 3
    },
    {
      food_name: "Mac and Cheese",
      qty: 1,
      // date format YYYY-MM-DD
      date: "2015-04-06",
      children_id: 3,
      category_id: 5
    },
    {
      food_name: "Doritos",
      qty: 1,
      // date format YYYY-MM-DD
      date: "2015-04-07",
      children_id: 3,
      category_id: 6
    },
    {
      food_name: "Broccoli",
      qty: 1,
      // date format YYYY-MM-DD
      date: "2015-08-07",
      children_id: 3,
      category_id: 1
    }
  ]);
};
