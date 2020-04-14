const dotenv = require('dotenv');
const {Pool} = require('pg');

dotenv.config();
const { USER, HOST, DATABASE, PASSWORD, PORT } = process.env;
const pool = new Pool({
user:USER,
host:HOST,
database:DATABASE,
password:PASSWORD,
port:PORT
});

module.exports = pool;