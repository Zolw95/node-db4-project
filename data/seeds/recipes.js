exports.seed = async function (knex) {
  await knex("recipes").insert([
    {
      id: 1,
      name: "Chicken Cutlet",
    },
    {
      id: 2,
      name: "Chicken Alfredo",
    },
    {
      id: 3,
      name: "Chicken Parm",
    },
  ]);

  await knex("ingredients").insert([
    {
      id: 1,
      name: "Raw Chicken",
    },
    {
      id: 2,
      name: "Alfredo Sauce",
    },
    {
      id: 3,
      name: "Parmesan Cheese",
    },
    {
      id: 4,
      name: "Tortilla",
    },
    {
      id: 5,
      name: "Salt",
    },
  ]);

  await knex("instructions").insert([
    {
      id: 1,
      name: "Cook Chicken",
      stepNumber: 1,
      recipeId: 1,
    },
    {
      id: 2,
      name: "Add To Wrap",
      stepNumber: 2,
      recipeId: 1,
    },
    {
      id: 3,
      name: "Broil Chicken",
      stepNumber: 1,
      recipeId: 2,
    },
    {
      id: 4,
      name: "Add Sauce",
      stepNumber: 2,
      recipeId: 2,
    },
    {
      id: 5,
      name: "Bake Chicken",
      stepNumber: 1,
      recipeId: 3,
    },
    {
      id: 6,
      name: "Add Parmesan",
      stepNumber: 2,
      recipeId: 3,
    },
  ]);

  await knex("recipes_ingredients").insert([
    {
      recipeId: 1,
      ingredientId: 1,
      amount: 3,
    },
    {
      recipeId: 1,
      ingredientId: 2,
      amount: 6,
    },
    {
      recipeId: 1,
      ingredientId: 3,
      amount: 5,
    },
    {
      recipeId: 2,
      ingredientId: 4,
      amount: 6,
    },
    {
      recipeId: 3,
      ingredientId: 5,
      amount: 1,
    },
  ]);

  await knex("recipes_instructions").insert([
    {
      recipeId: 1,
      instructionId: 1,
    },
    {
      recipeId: 1,
      instructionId: 2,
    },
    {
      recipeId: 2,
      instructionId: 3,
    },
    {
      recipeId: 2,
      instructionId: 4,
    },
    {
      recipeId: 3,
      instructionId: 5,
    },
    {
      recipeId: 3,
      instructionId: 6,
    },
  ]);
};
