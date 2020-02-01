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

  await knex.schema.createTable("children", tbl => {
    tbl.increments();
    tbl.string("child_name", 128).notNullable();
    tbl.integer("child_age");
    tbl
      .integer("users_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("categories", tbl => {
    tbl.increments();
    tbl
      .string("category_name", 255)
      .notNullable()
      .unique();
    tbl.integer("category_points");
  });

  await knex.schema.createTable("foods", tbl => {
    tbl.increments();
    tbl.string("food_name", 255).notNullable();
    tbl.integer("qty").notNullable();
    tbl.date("date").notNullable();
    tbl
      .integer("users_id")
      .notNullable()
      .references("id")
      .inTable("users")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("children_id")
      .notNullable()
      .references("id")
      .inTable("children")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("category_id")
      .notNullable()
      .references("id")
      .inTable("categories")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });
};

exports.down = async function(knex) {
  await knex.schema.dropTableIfExists("foods");
  await knex.schema.dropTableIfExists("categories");
  await knex.schema.dropTableIfExists("children");
  await knex.schema.dropTableIfExists("users");
};
