exports.up = function (knex) {
    return knex.schema
        .createTable('recipes', (tbl) => {
            tbl.increments('recipe_id');
            tbl.text('recipe').notNull().unique();
            tbl.timestamp('created_at');
        })

        .createTable('ingredients', (tbl) => {
            tbl.increments('ingredient_id')
            tbl.text('ingredient').notNull().unique();
            tbl.integer('recipe_id')
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })

        .createTable('instructions', (tbl) => {
            tbl.increments('instructions_id');
            tbl.text('instructions').notNull();
            tbl.integer('step_number');
            tbl.integer('recipe_id')
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        })

        .createTable('amounts', (tbl) => {
            tbl.increments('amount_id');
            tbl.float('amount_oz').notNull();
            tbl.integer('recipe_id')
                .references('recipe_id')
                .inTable('recipes')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
            tbl.integer('ingredient_id')
                .references('ingredient_id')
                .inTable('ingredients')
                .onDelete('CASCADE')
                .onUpdate('CASCADE');
        });

};

exports.down = function (knex) {
    return knex.schema
        .dropTable('amounts')
        .dropTable('instructions')
        .dropTable('ingredients')
        .dropTable('recipes');
};