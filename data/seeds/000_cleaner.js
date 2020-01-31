exports.seed = async knex => {
  await knex("category_foods").truncate();
  await knex("foods").truncate();
  await knex("categories").truncate();
  await knex("children").truncate();
  await knex("users").truncate();
};
