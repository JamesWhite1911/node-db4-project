exports.seed = function (knex) {
    return knex('recipes').insert([
        { ingredient: 'olive oil', recipe_id: 1 },
        { ingredient: 'spaghetti sauce', recipe_id: 1 },
        { ingredient: 'pasta', recipe_id: 1 },
        { ingredient: 'rib eye', recipe_id: 2 },
        { ingredient: 'butter', recipe_id: 2 },
        { ingredient: 'bbq sauce', recipe_id: 2 },
        { ingredient: 'pork roast', recipe_id: 3 },
        { ingredient: 'pepper', recipe_id: 3 },
        { ingredient: 'garlic cloves', recipe_id: 3 },
    ]);
};