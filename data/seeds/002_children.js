exports.seed = async knex => {
  await knex("children").del();
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
    },
    {
      child_name: "Alice",
      child_age: "5",
      users_id: 2
    },
    {
      child_name: "Beth",
      child_age: "5",
      users_id: 3
    },
    {
      child_name: "Brad",
      child_age: "9",
      users_id: 4
    },
    {
      child_name: "Nolan",
      child_age: "5",
      users_id: 5
    },
    {
      child_name: "Carey",
      child_age: "5",
      users_id: 5
    }
  ]);
};
