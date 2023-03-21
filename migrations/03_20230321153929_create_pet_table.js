/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema
    .createTable('pet', table => {
      table.increments('id');
      table.string('name', 250);
      table.integer('pet_type_id');
      table.foreign('pet_type_id').references('pet_type.id');
      table.integer('food_type_id');
      table.foreign('food_type_id').references('food_type.id');
    })
  }

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
  return knex.schema
    .alterTable('pet', table => {
      table.dropForeign('pet_type_id');
      table.dropForeign('food_type.id');
    })
    .then(() => {
      return knex.schema.dropTableIfExists('pet');
    });
};
