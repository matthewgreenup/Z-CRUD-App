/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {user_id: 1, item_name: 'hammer', description: 'It is a hammer. It is meant for hitting things. Namely nails.', quantity:5},
    {user_id: 1, item_name: 'bigger hammer', description: 'It is a bigger hammer. It is meant for hitting things. Namely nails.', quantity:2},
  ]);
};
