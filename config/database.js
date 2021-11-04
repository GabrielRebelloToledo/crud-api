const sql = require('mssql')

const config = 'mssql://sa:123456@NIT38308/\SA/crud2';

const poolPromise = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Connected to SQLServer...');
        return pool;
    })
    .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
    sql,
    poolPromise
};