exports.seed = function (knex) {
    return knex('recipes').insert([
        { recipe: 'Speghetti Bolognese' },
        { recipe: 'Cowboy Grilled Rib Eyes' },
        { recipe: 'Puerto Rican Pork Roast' },
    ]);
};