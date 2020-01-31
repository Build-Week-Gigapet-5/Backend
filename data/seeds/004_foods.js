exports.seed = async knex => {
  await knex("foods").insert([
    {
      food_name: "lollipop",
      qty: 1,
      // date format YYYY-MM-DD
      date: "2015-03-06",
      users_id: 1,
      children_id: 1
    },
    {
      food_name: "coconut oil",
      qty: 1,
      date: "2015-03-06",
      users_id: 1,
      children_id: 1
    }
  ]);
};
