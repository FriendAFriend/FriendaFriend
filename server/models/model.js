const { Pool } = require('pg');
require('dotenv').config();

// create a new pool here using the connection string above
const pool = new Pool({
  connectionString: process.env.DB_URI,
});

// log the query params to the console and execute the query
module.exports = {
  query: (text, params, callback) => {
    console.log('executed query', text);
    return pool.query(text, params, callback);
  },
};
