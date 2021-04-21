const pgp = require('pg-promise')();
const cs = process.env.DATABASE_URL || 'postgres://localhost:5432/tvwatchlistapp2';
const db = pgp(cs);

module.exports = db;