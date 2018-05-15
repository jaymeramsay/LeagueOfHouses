
exports.up = function(knex, Promise) {
  return knex.schema.createTable('houses', (table) => {
    table.increments();
    table.string('name');
    table.string('address').notNullable();
    table.string('email').notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.boolean('backyard');
    table.integer('rooms');
    table.integer('square_footage').notNullable();
    table.timestamps(true, true);
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('houses');
};
