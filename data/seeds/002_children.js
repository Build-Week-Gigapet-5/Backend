exports.seed = async knex => {
  await knex("children").insert([
    {
      child_name: "Ben",
      child_age: 3,
      users_id: 1
    },
    {
      child_name: "Sara",
      child_age: "5",
      users_id: 1
    }
  ]);
};
