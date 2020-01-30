exports.up = async function(knex) {
  await knex.schema.createTable("users", tbl => {
    tbl.increments();
    tbl.string("userName", 128).notNullable();
    tbl
      .string("userEmail", 128)
      .notNullable()
      .unique();
    tbl.string("userPassword", 255).notNullable();
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("users");
};
