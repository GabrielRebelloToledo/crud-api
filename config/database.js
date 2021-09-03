const sql = require('mssql')

// BANCO FUVS -- AINDA NÃO CRIADO
// const config = 'mssql://AdmNucleoTec:Fd53cd-.@srvfuvs02.fuvs.br/monitorCirurgico';

//  AMBIENTE LOCAL 
/* const config = 'mssql://sa:123456@NTHCSL29740/\SA/crud'; */
const config = 'mssql://sa:12345@DESKTOP-6EMJDCL/\SA/crud';

const poolPromise = new sql.ConnectionPool(config)
  .connect()
  .then(pool => {
    console.log('Connected to SQLServer...');
    return pool;
  })
  .catch(err => console.log('Database Connection Failed! Bad Config: ', err));

module.exports = {
  sql, poolPromise
};

