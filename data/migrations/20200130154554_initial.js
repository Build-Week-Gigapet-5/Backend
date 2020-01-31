exports.up = async function(knex) {
  await knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("name", 128).notNullable();
    tbl
      .string("email", 128)
      .notNullable()
      .unique();
    tbl.string("password", 255).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users");
};