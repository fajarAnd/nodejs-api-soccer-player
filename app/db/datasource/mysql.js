require('dotenv').config();

const config = require('../../../config');

const db = {
  username: config.get('DB_USER'),
  password: config.get('DB_PASS'),
  database: config.get('DB_NAME'),
  host: config.get('DB_URL'),
  dialect: config.get('DB_DIALECT'),
  define: {
    underscored: true,
  },
  dialectOptions: {
    // ssl: true,
  },
  logging: false,
  timezone: '+07:00',
};

module.exports = db;
