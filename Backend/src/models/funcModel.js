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
    const consulta = await pool.request().query(`select top 10 * from funcionarios where nome_func like '${nome}%'`);
    return consulta.recordset; 
   
    
}
//Função para deletar funcionário pelo id
const deletar = async (id) => {
    const pool = await conexao; 
    const func = await pool.request().query(`select id_func from funcionarios where id_func = ${id}`);
    if(func.recordset.length == 0){
        return "O funcionário não esta cadastrado"
    }else{
        const consulta2 = await pool.request().query(`delete from funcionarios where id_func = ${id}`);
        return "Funcionário deletado com sucesso"
    }
    
}
//Função para criar funcionário
const criar = async (nome,senha) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`INSERT INTO [dbo].[funcionarios]
                                                ([nome_func]
                                                ,[senha_func]
                                                ,[dt_cadastro]
                                                ,[dt_alteracao])
                                                VALUES
                                                ('${nome}'
                                                ,'${senha}'
                                                ,CURRENT_TIMESTAMP
                                                ,CURRENT_TIMESTAMP)`);
    return consulta
}
//Função para alterar funcionário pelo id
const alterar = async (nome,senha,id) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`UPDATE funcionarios
                                                SET nome_func = '${nome}'
                                                    ,senha_func = '${senha}'
                                                    ,dt_alteracao = CURRENT_TIMESTAMP
                                                WHERE id_func = ${id}`);
    const consulta2 = await pool.request().query(`select id_func,nome_func,senha_func,dt_alteracao from funcionarios where id_func = ${id}`)
    return consulta2.recordset
}


module.exports = {
    pegarTodos,pegarPorNome,deletar,criar,alterar
}