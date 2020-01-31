exports.seed = async knex => {
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
