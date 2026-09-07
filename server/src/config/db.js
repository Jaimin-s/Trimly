const dotenv = require('dotenv')
dotenv.config()

const pg = require('pg')

const { Pool } = pg

const pool = new Pool({
    user: process.env.DB_USER || 'postgres',
    host: process.env.DB_HOST || 'localhost',
    database: process.env.DB_NAME || 'trimly_db',
    password: process.env.DB_PASSWORD || '14022029',
    port: process.env.DB_PORT || 5432,
});

module.exports = pool;