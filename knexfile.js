
module.exports = {

  development: {
    client: 'pg',
    connection: 'postgresql://localhost/PACKRTRACKR'

  },
  production: {
    client: 'pg',
    connection: process.env.DATABASE_URL
  }
};
