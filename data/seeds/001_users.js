exports.seed = async knex => {
  await knex("users").del();
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
    },
    {
      name: "Mike",
      email: "Mike@gmail.com",
      password: "password"
    },
    {
      name: "Jerry",
      email: "Jerry@gmail.com",
      password: "password"
    },
    {
      name: "Ann",
      email: "Ann@gmail.com",
      password: "password"
    }
  ]);
};
