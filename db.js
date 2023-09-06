const createConnectionPool  = require('@databases/pg');

const pool = new createConnectionPool({
    database: 'my-db-app',
    user: 'postgres',
    password: 'YourPassword',
    host: 'localhost',
    port: 5432
});

module.exports = pool;