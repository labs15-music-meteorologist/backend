// Update with your config settings.
/* require('dotenv').config(); */

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
    debug: true,
  },

  deployedDevelopment: {
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
    debug: true,
  },

  staging1: {
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
    debug: true,
  },

  staging2: {
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
    debug: true,
  },
};
