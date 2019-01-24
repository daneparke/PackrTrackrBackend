// Update with your config settings.

module.exports = {

  development: {
    client: 'pg',
    connection: {
      filename: 'postgresql://localhost/PACKRTRACKR'
    }
  },
  production: {
    client: 'postgresql',
    connection: process.env.DATABASE_URL
  }
};
