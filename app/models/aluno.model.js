const { poolPromise } = require('../../config/database');

exports.getAll = async () => {

    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT * 
                FROM aluno`)

    return rs.recordset;
}

exports.create = async (dados) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`INSERT INTO aluno(nome, curso)
                VALUES ('${dados.nome}', '${dados.curso}')`)

    return rs.rowsAffected;
}

exports.findById = async (id) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`SELECT *
                FROM aluno
                WHERE id = '${id}'`);
    return rs.recordset;
}

exports.delete = async (id) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`DELETE FROM aluno 
                         
                         WHERE id = ${id} `);
    return rs.rowsAffected;
}

exports.update = async (id, dados) => {
    const pool = await poolPromise;
    const rs = await pool
        .request()
        .query(`UPDATE aluno SET 
                        nome = '${dados.nome}' ,
                        curso = '${dados.curso}'                        
                        WHERE id = ${id} `);
    return rs.rowsAffected;
}