require("dotenv").config();
const { Pool } = require("pg");

const config = {
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  port: process.env.DB_PORT,
  allowExitOnIdle: true,
};

const pool = new Pool(config);

module.exports = { pool };
