const express = require('express');

const Recipes = require('../model/model');

const router = express.Router();

router.get('/', (req, res, next) => {
    Recipes.getAllRecipes()
        .then((recipes) => {
            res.json(recipes);
        })
        .catch(next);
});

router.get('/:recipe_id', async (req, res, next) => {
    const { recipe_id } = req.params;
    console.log(req.params.recipe_id);

    Recipes.getRecipeById(recipe_id)
        .then((recipe) => {
            res.json(recipe);
        })
        .catch(next);
});

module.exports = router;