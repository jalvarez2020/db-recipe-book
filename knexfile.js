// Update with your config settings.

module.exports = {

  development: {
    client: 'sqlite3',
    connection: {
      filename: './data/recipeBookDB.sqlite3'
    },
    migrations: {
      directory: './data/migrations'
    },
    seeds: { 
      directory: './data/seeds'
    }
  },

};
