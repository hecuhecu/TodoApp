// Update with your config settings.

module.exports = {

  development: {
    client: "mysql",
    connection: {
      database: "TodoApp",
      user: "root",
      password: "kawamura0628",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  staging: {
    client: "mysql",
    connection: {
      database: "TodoApp",
      user: "root",
      password: "kawamura0628",
    },
    pool: {
      min: 2,
      max: 10
    },
  },

  production: {
    client: "mysql",
    connection: {
      database: "TodoApp",
      user: "root",
      password: "kawamura0628",
    },
    pool: {
      min: 2,
      max: 10
    },
  }

};