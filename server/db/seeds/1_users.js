
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('users').del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          name: 'Julie Breeze',
          email: 'julie@julie.com',
          hashed_password: 'windy'
        },

        {
          name: 'Brian Flanigan',
          email: 'brian@brian.com',
          hashed_password: 'irish'
        },

        {
          name: 'Preston Uli',
          email: 'preston@preston.com',
          hashed_password: 'ascott'
        }
      ]);
    });
};
