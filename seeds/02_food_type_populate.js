/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex.schema.raw('TRUNCATE food_type CASCADE')
  await knex('food_type').del()
  await knex('food_type').insert([
    {id: 1, name: 'Fish Food', description: 'Food for the fishies!'},
    {id: 2, name: 'Dog Food', description: 'Food for the doggies!'},
    {id: 3, name: 'Cat Food', description: 'Food for the kitties!'}
  ]);
};
