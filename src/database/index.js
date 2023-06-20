const { Client } = require('pg');
require('dotenv').config();

let client;

if (process.env.NODE_ENV === 'production') {
  // Modo de produção
  client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false,
    },
  });
} else {
  // Modo de desenvolvimento local
  client = new Client({
    host: 'localhost',
    port: 5432,
    user: 'root',
    password: 'root',
    database: 'mycontacts',
  });
}
client.connect();

exports.query = async (query, values) => {
  const { rows } = await client.query(query, values);
  return rows;
};
