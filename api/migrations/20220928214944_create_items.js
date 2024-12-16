/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('items', table => {
        table.increments('item_id');
        table.integer('user_id').notNullable
        table.foreign('user_id').references('user_id').inTable('users')
        table.string('item_name',).notNullable();
        table.string('description', 2048)
        table.integer('quantity').notNullable;
      });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.alterTable('items', table => {
        table.dropForeign('user_id');
    }).then(()=>{
        return knex.schema.dropTableIfExists('items');
    })
};
