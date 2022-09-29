/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
 exports.up = function(knex) {
    return knex.schema.createTable('items', table => {
        table.increments('id');
        table.integer('user_id')
        table.foreign('user_id').references('id').inTable('users')
        table.string('item_name',).notNullable();
        table.string('description', 1024)
        table.integer('quantity');
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
