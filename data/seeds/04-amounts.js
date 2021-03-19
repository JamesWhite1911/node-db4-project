exports.seed = function (knex) {
    // Deletes ALL existing entries
    return knex('amounts')
        .del()
        .then(function () {
            // Inserts seed entries
            return knex('amounts').insert([
                {
                    amount_oz: 5.1,
                    recipe_id: 1,
                    ingredient_id: 1,
                },
                {
                    amount_oz: 6.7,
                    recipe_id: 1,
                    ingredient_id: 2,
                },
                {
                    amount_oz: 15.1,
                    recipe_id: 1,
                    ingredient_id: 3,
                },
                {
                    amount_oz: 1.1,
                    recipe_id: 2,
                    ingredient_id: 4,
                },
                {
                    amount_oz: 16.7,
                    recipe_id: 2,
                    ingredient_id: 5,
                },
                {
                    amount_oz: 15.25,
                    recipe_id: 2,
                    ingredient_id: 6,
                },
                {
                    amount_oz: 4.12,
                    recipe_id: 3,
                    ingredient_id: 7,
                },
                {
                    amount_oz: 6.17,
                    recipe_id: 3,
                    ingredient_id: 8,
                },
                {
                    amount_oz: 4.11,
                    recipe_id: 3,
                    ingredient_id: 9,
                },
            ]);
        });
};