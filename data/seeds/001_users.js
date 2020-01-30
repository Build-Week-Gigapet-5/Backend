exports.seed = async knex => {
  // Deletes ALL existing entries
  await knex("users").del();
  await knex("users").insert([
    { userName: "Jane", userEmail: "Jane@gmail.com", userPassword: "abcde" },
    { userName: "Sara", userEmail: "Sara@gmail.com", userPassword: "password" }
  ]);
};
