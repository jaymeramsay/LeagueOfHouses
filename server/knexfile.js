// Update with your config settings.

module.exports = {

    development: {
      client: 'pg',
      connection: 'postgres://localhost:5432/leagueofhouses_dev'
    },

    test: {
      client: 'pg',
      connection: 'postgres://localhost:5432/leagueofhouses_test'
    },

    production: {
      client: 'pg',
      connection: process.env.DATABASE_URL
    }

};
