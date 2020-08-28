exports.up = async function (knex) {
  //   await knex("recipes_instructions").del();
  //   await knex("recipes_ingredients").del();
  //   await knex("instructions").del();
  //   await knex("ingredients").del();
  //   await knex("recipes").del();

  await knex.schema.createTable("recipes", (tbl) => {
    tbl.increments("id");
    tbl.text("name").notNullable();
  });

  await knex.schema.createTable("ingredients", (tbl) => {
    tbl.increments("id");
    tbl.text("name").notNullable();
  });

  await knex.schema.createTable("instructions", (tbl) => {
    tbl.increments("id");
    tbl.text("name").notNullable();
    tbl.integer("stepNumber").notNullable();
    tbl
      .integer("recipeId")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
  });

  await knex.schema.createTable("recipes_ingredients", (tbl) => {
    tbl
      .integer("recipeId")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("ingredientId")
      .notNullable()
      .references("id")
      .inTable("ingredients")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl.float("amount").notNullable();

    tbl.primary(["recipeId", "ingredientId"]);
  });

  await knex.schema.createTable("recipes_instructions", (tbl) => {
    tbl
      .integer("recipeId")
      .notNullable()
      .references("id")
      .inTable("recipes")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    tbl
      .integer("instructionId")
      .notNullable()
      .references("id")
      .inTable("instructions")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    tbl.primary(["recipeId", "instructionId"]);
  });
};

exports.down = function (knex) {
  return knex.schema
    .dropTableIfExists("recipes_instructions")
    .dropTableIfExists("recipes_ingredients")
    .dropTableIfExists("instructions")
    .dropTableIfExists("ingredients")
    .dropTableIfExists("recipes");
};
