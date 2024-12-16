// Update with your config settings.

/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */

const HOST = process.env.DATABASE_HOST || '127.0.0.1'
const USER = process.env.POSTGRES_USER || 'postgres'
const PASSWORD = process.env.POSTGRES_PASSWORD || 'docker'
const PORT = process.env.PORT || 5432
const DATABASE = process.env.POSTGRES_DB || 'fermi'

module.exports = {
  development: {
    client: 'pg',
    connection: {
      host: HOST,
      user: USER,
      password: PASSWORD,
      port: PORT,
      database: DATABASE
    },
    migrations: {
      directory: './migrations'
    },
    seeds: {
      directory: './seeds'
    }
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  },

  production: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password'
    },
    pool: {
      min: 2,
      max: 10
    },
    migrations: {
      tableName: 'knex_migrations'
    }
  }
}

// // Update with your config settings.

// require("dotenv").config();

// let connectionString = process.env.DATABASE_URL;

// /**
//  * @type { Object.<string, import("knex").Knex.Config> }
//  */
// module.exports = {

//   development: {
//     client: "pg",
//     connection: connectionString,
//     // connection: "postgres://postgres:docker@localhost:5432/inventory"
//   },

//   staging: {
//     client: 'pg',
//     connection: {
//       database: 'my_db',
//       user:     'username',
//       password: 'password'
//     },
//     pool: {
//       min: 2,
//       max: 10
//     },
//     migrations: {
//       tableName: 'knex_migrations'
//     }
//   },

//   production: {
//     client: 'pg',
//     connection: {connectionString, ssl: {rejectUnauthorized: false }}
//   }

// };
