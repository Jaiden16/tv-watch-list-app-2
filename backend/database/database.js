const pgp = require('pg-promise')();
const cs = 'postgres://localhost:5432/tvwatchlistapp2';
const db = pgp(cs);

module.exports = db;