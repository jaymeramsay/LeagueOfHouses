
exports.up = function(knex, Promise) {
  return knex.schema.createTable('bands', (table) => {
    table.increments();
    table.string('name').notNullable();
    table.string('bio');
    table.string('genre');
    table.string('email').notNullable().unique();
    table.specificType('hashed_password', 'char(60)').notNullable();
    table.timestamps(true, true);
    
  });
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('bands');
};
