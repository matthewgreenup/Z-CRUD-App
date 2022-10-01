/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> } 
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {first_name: 'John', last_name: 'Doe', username: "john.doe", passHash: '$2b$10$LfIAurEIwyzavckhCDg2MO0xdDan/rLRzopHsZ5ja5ulbcqzbbF/W'},
    {first_name: 'Daniel', last_name: 'Smith', username: "Daniel.Smith", passHash: '$2b$10$/TT0Q7kTZXm1/LeZvbLXsOGkULRnpd3NEVgJ.nzdzzY70vjQ7Z.ue'},
  ]);
};
