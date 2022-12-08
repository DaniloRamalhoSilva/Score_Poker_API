require('dotenv').config();

const environment = process.env.NODE_ENV || 'dev';
const nameBD = 'score_bd';

const suffix = {
  dev: '-dev',
  development: '-pro',
  test: '-test',
};

const options = {
  host: process.env.MYSQLHOST || 'localhost',
  port: process.env.MYSQLPORT || '3306',
  database: `${process.env.MYSQLDATABASE || nameBD}${suffix[environment] || suffix.test}`,
  username: process.env.MYSQLUSER || 'root',
  password: process.env.MYSQLPASSWORD || '1234',
  dialect: 'mysql',
  dialectOptions: { timezone: 'Z' },
  logging: process.env.DEBUG !== 'false',
};

module.exports = {
  development: { ...options },
  test: { ...options },
};
