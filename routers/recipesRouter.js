const express = require("express");
const Recipes = require("../models/recipes");

const router = express.Router();

router.get("/recipes", async (req, res, next) => {
  try {
    const recipes = await Recipes.getRecipes();

    res.status(201).json(recipes);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/:id/shoppingList", async (req, res, next) => {
  try {
    const list = await Recipes.getShoppingList(req.params.id);

    res.status(201).json(list);
  } catch (err) {
    next(err);
  }
});

router.get("/recipes/:id/instructions", async (req, res, next) => {
  try {
    const instructions = await Recipes.getInstructions(req.params.id);

    res.status(201).json(instructions);
  } catch (err) {
    next(err);
  }
});

router.get("/ingredients/:id/recipes", async (req, res, next) => {
  try {
    const recipesWithOneIng = await Recipes.getRecipesWithOneIngredient(
      req.params.id
    );
    res.status(201).json(recipesWithOneIng);
  } catch (err) {
    next(err);
  }
});

module.exports = router;
