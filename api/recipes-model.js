const db = require('../../data/db-config');

function getAllRecipes() {
  return db('recipes').select('*');
}

function getRecipeById(recipe_id) {
  return db('recipes as rp')
    .select('rp.recipe', 'is.*', 'in.*')
    .leftJoin('instructions as is', 'rp.recipe_id', 'is.recipe_id')
    .leftJoin('ingredients as in', 'rp.recipe_id', 'in.recipe_id')
    .where('rp.recipe_id', recipe_id);
}

module.exports = {
  getAllRecipes,
  getRecipeById,
};