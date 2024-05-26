//Importa a conexão com o banco
const conexao = require('../db')
//Função para pegar todos os funcionários
const pegarTodos = async () => { 
    const pool = await conexao; 
    const consulta = await pool.request().query("select * from funcionarios"); 
    return consulta.recordset; 
};
//Função para pegar os 10 primeiros onde o nome começe com...
const pegarPorNome = async (nome) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`select top 10 * from funcionarios where nome_func like '${nome}%'`)
    return consulta.recordset; 
}



module.exports = {
    pegarTodos,pegarPorNome
}