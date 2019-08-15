// Update with your config settings.
require('dotenv').config();

module.exports = {
  development: {
    client: 'pg',
    connection: {
      database: process.env.DATABASE_DB,
      user: process.env.DATABASE_USER,
      password: process.env.DATABASE_PASSWORD,
    },
    useNullAsDefault: true,
    migrations: {
      directory: './src/data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    },
  },

  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL,
    useNullAsDefault: true,
    migrations: {
      directory: './src/data/migrations',
      tableName: 'knex_migrations',
    },
    seeds: {
      directory: './src/data/seeds',
    },
  },
};
