exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex("users").truncate();
  await knex("users").insert([
    {
      name: "Jane",
      email: "Jane@gmail.com",
      password: "abcde"
    },
    {
      name: "Sara",
      email: "Sara@gmail.com",
      password: "password"
    }
  ]);
};
