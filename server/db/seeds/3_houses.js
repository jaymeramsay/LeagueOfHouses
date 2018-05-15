exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('houses').del()
    .then(function () {
      // Inserts seed entries
      return knex('houses').insert([
        {
          name: 'The Launch',
          address: '6500 Linda Lane Austin, TX 78723',
          backyard: true,
          rooms: 0,
          square_footage: 2000,
          email: 'thelaunch@launch.com',
          hashed_password: 'launch'
        },

        {
          name: 'The Happening',
          address: '5401 Avenue F Austin, TX 78751',
          backyard: true,
          rooms: 3,
          square_footage: 1600,
          email: 'happening@happening.com',
          hashed_password: 'happening'
        },

        {
          name: 'Tiny Town',
          address: '710 West Ave Austin, TX 78702',
          backyard: false,
          rooms: 3,
          square_footage: 800,
          email: 'tinytown@tinytown.com',
          hashed_password: 'tinytown'
        }
      ]);
    });
};
