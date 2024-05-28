//Importa a conexão com o banco
const conexao = require('../db')
//Função para pegar todos as Compras
const pegarTodos = async () => { 
    const pool = await conexao; 
    const consulta = await pool.request().query(`select c.id_compra as id,
                                                c.fornecedor as fornecedor,
                                                p.nome_prod,
                                                c.custo_prod,
                                                c.qntd_prod,
                                                c.total_prod
                                                from compras c
                                                inner join produtos p on p.id_prod = c.id_prod`); 
    return consulta.recordset; 
};
//Função para pegar a compra pelo id
const pegarPorId = async (id) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`select c.id_compra as id,
                                                c.fornecedor as fornecedor,
                                                p.nome_prod,
                                                c.custo_prod,
                                                c.qntd_prod,
                                                c.total_prod
                                                from compras c
                                                inner join produtos p on p.id_prod = c.id_prod
                                                where id_compra = ${id}`);
    return consulta.recordset; 
   
    
}
//Função para deletar Compra pelo id
const deletar = async (id) => {
    const pool = await conexao; 
    const compra = await pool.request().query(`select id_compra from compras where id_compra = ${id}`);
    if(compra.recordset.length == 0){
        return "A Compra não foi lançada"
    }else{
        const consulta2 = await pool.request().query(`delete from compras where id_compra = ${id}`);
        return "Compra deletada com sucesso"
    }
    
}
//Função para retornar maior numero de Compra
const numeroCompra = async ()=>{
    const pool = await conexao; 
    const consulta = await pool.request().query(`SELECT COALESCE(MAX(id_compra)+1, 0) as id FROM compras`)
    return consulta.recordset
}
//Função para lançar Compra 
const criar = async (id,fornecedor,produto,custo,qntd) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`INSERT INTO [dbo].[compras]
                                                ([id_compra]
                                                ,[fornecedor]
                                                ,[id_prod]
                                                ,[custo_prod]
                                                ,[qntd_prod]
                                                ,[total_prod]
                                                ,[dt_lancamento])
                                            VALUES
                                                (${id}
                                                ,'${fornecedor}'
                                                ,${produto}
                                                ,${custo}
                                                ,${qntd}
                                                ,${qntd * custo}
                                                ,CURRENT_TIMESTAMP)`);
    return consulta
}


module.exports = {
    pegarTodos,numeroCompra,deletar,criar,pegarPorId
}