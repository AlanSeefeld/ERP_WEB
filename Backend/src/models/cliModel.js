//Importa a conexão com o banco
const conexao = require('../db')
//Função para pegar todos os Clientes
const pegarTodos = async () => { 
    const pool = await conexao; 
    const consulta = await pool.request().query("select top 10 * from clientes"); 
    return consulta.recordset; 
};
//Função para pegar os 10 primeiros onde o nome começe com...
const pegarPorNome = async (nome) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`select top 10 * from clientes where nome_cli like '%${nome}%'`);
    return consulta.recordset; 
   
    
}
//Função para deletar Cliente pelo id
const deletar = async (id) => {
    const pool = await conexao; 
    const cli = await pool.request().query(`select id_cli from clientes where id_cli = ${id}`);
    if(cli.recordset.length == 0){
        return "O Cliente não esta cadastrado"
    }else{
        const consulta2 = await pool.request().query(`delete from clientes where id_cli = ${id}`);
        return "Cliente deletado com sucesso"
    }
    
}
//Função para criar Cliente
const criar = async (tipo,nome,doc,tel) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`INSERT INTO [dbo].[clientes]
                                                ([tp_cli]
                                                ,[nome_cli]
                                                ,[doc_cli]
                                                ,[tel_cli]
                                                ,[dt_cadastro]
                                                ,[dt_alteracao])
                                                VALUES
                                                ('${tipo}'
                                                ,'${nome}'
                                                ,'${doc}'
                                                ,'${tel}'
                                                ,CURRENT_TIMESTAMP
                                                ,CURRENT_TIMESTAMP)`);
    return consulta
}
//Função para alterar Cliente pelo id
const alterar = async (tipo,nome,doc,tel,id) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`select * from clientes where id_cli = ${id}`)
    if(consulta.recordset.length == 0){
        return {message:"O Cliente não esta cadastrado"}
    }else{
        const consulta2 = await pool.request().query(`UPDATE [dbo].[clientes]
                                                      SET [tp_cli] = '${tipo}'
                                                      ,[nome_cli] = '${nome}'
                                                      ,[doc_cli] = '${doc}'
                                                      ,[tel_cli] = '${tel}'
                                                      ,[dt_alteracao] = CURRENT_TIMESTAMP
                                                      WHERE id_cli = ${id}`);
        const consulta3 = await pool.request().query(`select * from clientes where id_cli = ${id}`)
        return consulta3.recordset
    }
    
}


module.exports = {
    pegarTodos,pegarPorNome,deletar,criar,alterar
}