/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function (knex) {
  // Deletes ALL existing entries
  await knex('items').del()
  await knex('items').insert([
    {
      user_id: 1,
      item_name: 'Pen',
      description: 'Writing Utensil',
      quantity: 25
    },
    {
      user_id: 2,
      item_name: 'Pencil',
      description: 'Writing Utensil',
      quantity: 45
    },
    {
      user_id: 1,
      item_name: 'Paper',
      description:
        'at tellus at urna condimentum mattis. Nulla facilisi nullam vehicula ipsum a arcu cursus vitae. Vel pharetra vel turpis nunc. Sit amet risus nullam eget felis eget nunc. Sapien pellentesque habitant morbi tristique senectus. Donec pretium vulputate sapien nec sagittis aliquam malesuada bibendum arcu. Adipiscing elit pellentesque habitant morbi tristique senectus et netus et. Id donec ultrices tincidunt arcu non sodales neque sodales. Est velit egestas dui id ornare arcu odio ut sem. Donec et odio pellentesque diam volutpat commodo. Diam vulputate ut pharetra sit amet aliq (also by the way the default users passwords are password))',
      quantity: 25
    }
  ])
}
