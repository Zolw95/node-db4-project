const db = require("../recipes/config");

async function getRecipes() {
  try {
    const recipes = await db("recipes");

    return recipes;
  } catch (err) {
    console.log(err.stack);
    return null;
  }
}

async function getShoppingList(id) {
  try {
    const ingredients = await db("recipes_ingredients").where("recipeId", id);

    return ingredients;
  } catch (err) {
    console.log(stack.err);
  }
}

async function getInstructions(id) {
  try {
    const instructions = await db("recipes_instructions").where("recipeId", id);

    return instructions;
  } catch (err) {
    console.log(stack.err);
  }
}

async function getRecipesWithOneIngredient(id) {
  try {
    const recipesWithOneIngredient = await db("recipes_ingredients").where(
      "amount",
      1
    );

    return recipesWithOneIngredient;
  } catch (err) {
    console.log(stack.err);
  }
}

module.exports = {
  getRecipes,
  getShoppingList,
  getInstructions,
  getRecipesWithOneIngredient,
};
