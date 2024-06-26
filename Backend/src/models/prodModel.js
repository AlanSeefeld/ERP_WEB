//Importa a conexão com o banco
const conexao = require('../db')
//Função para pegar todos os Produtos
const pegarTodos = async () => { 
    const pool = await conexao; 
    const consulta = await pool.request().query("select top 10 * from produtos"); 
    return consulta.recordset; 
};
//Função para pegar os 10 primeiros onde o nome começe com...
const pegarPorNome = async (nome) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`select top 10 * from produtos where nome_prod like '%${nome}%'`);
    return consulta.recordset; 
   
    
}
//Função para deletar produto pelo id
const deletar = async (id) => {
    const pool = await conexao; 
    const prod = await pool.request().query(`select id_prod from produtos where id_prod = ${id}`);
    if(prod.recordset.length == 0){
        return "O Produto não esta cadastrado"
    }else{
        const consulta2 = await pool.request().query(`delete from produtos where id_prod = ${id}`);
        return "Produto deletado com sucesso"
    }
    
}
//Função para criar Produto
const criar = async (tipo,nome,custo,preco,com,est) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`INSERT INTO [dbo].[produtos]
                                                ([tp_prod]
                                                ,[nome_prod]
                                                ,[custo_prod]
                                                ,[preco_prod]
                                                ,[comissao_prod]
                                                ,[estoque_prod]
                                                ,[dt_cadastro]
                                                ,[dt_alteracao])
                                                VALUES
                                                ('${tipo}'
                                                ,'${nome}'
                                                ,${custo}
                                                ,${preco}
                                                ,${com}
                                                ,${est}
                                                ,CURRENT_TIMESTAMP
                                                ,CURRENT_TIMESTAMP)`);
    return consulta
}
//Função para alterar Produto pelo id
const alterar = async (tipo,nome,custo,preco,com,est,id) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`select * from produtos where id_prod = ${id}`)
    if(consulta.recordset.length == 0){
        return {message:"O Produto não esta cadastrado"}
    }else{
        const consulta2 = await pool.request().query(`UPDATE [dbo].[produtos]
                                                        SET [tp_prod] = '${tipo}'
                                                        ,[nome_prod] = '${nome}'
                                                        ,[custo_prod] = ${custo}
                                                        ,[preco_prod] = ${preco}
                                                        ,[comissao_prod] = ${com}
                                                        ,[estoque_prod] = ${est}
                                                        ,[dt_alteracao] = CURRENT_TIMESTAMP
                                                      WHERE id_prod = ${id}`);
        const consulta3 = await pool.request().query(`select * from produtos where id_prod = ${id}`)
        return consulta3.recordset
    }
    
}


module.exports = {
    pegarTodos,pegarPorNome,deletar,criar,alterar
}