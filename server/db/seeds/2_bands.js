exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('bands').del()
    .then(function () {
      // Inserts seed entries
      return knex('bands').insert([
        {
          name: 'Beezus',
          bio: 'Four piece from Hyde Park',
          genre: 'grunge',
          email: 'beezus@beezus.com',
          hashed_password: 'buzz'
        },

        {
          name: 'Jackjoy',
          bio: 'Three piece from Terrytown',
          genre: 'Electronica',
          email: 'jackjoy@jackjoy.com',
          hashed_password: 'oontz'
        },

        {
          name: 'Homohobo',
          bio: 'DJ from SoCo',
          genre: 'Break beats',
          email: 'preston@preston.com',
          hashed_password: 'ascott'
        }
      ]);
    });
};
