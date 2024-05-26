//Importa a conexão com o banco
const conexao = require('../db')
//Função para pegar todos as Vendas a receber
const pegarTodos = async () => { 
    const pool = await conexao; 
    const consulta = await pool.request().query(`select * from receber where tp_pago = 0`); 
    return consulta.recordset; 
};
//Função para pegar a venda pelo id do cliente
const pegarPorId = async (cliente) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`select * from receber where id_cli = ${cliente} and tp_pago = 0`);
    return consulta.recordset; 
   
    
}

//Função para lançar receber
const criar = async (id_venda) => {
    const pool = await conexao; 
    const parcela = await pool.request().query(`select * from vendas where id_venda = ${id_venda}`)
    if(parcela.recordset.length == 0){
        return "Esta venda não existe"
    }else{
        const consulta = await pool.request().query(`INSERT INTO [dbo].[receber]
                                                ([id_venda]
                                                ,[id_cli]
                                                ,[total]
                                                ,[receber]
                                                ,[tp_pago])
                                                select id_venda,
                                                id_cli,
                                                sum(total_prod),
                                                sum(total_prod),
                                                0 from vendas
                                                where id_venda = ${id_venda}
                                                group by id_venda,id_cli`);
        return "parcela lançado com sucesso!"
    }
    
}
//Função para pagar parcela
const alterar = async (valor_pago,id_venda) =>{
    const pool = await conexao;
    const receber = await pool.request().query(`select * from receber where id_venda = ${id_venda}`) 
    if(receber.recordset[0].receber < valor_pago){
        return "valor que esta sendo pago é maior do que tem a receber"
    }else if(receber.recordset[0].receber == valor_pago){
        const consulta = await pool.request().query(`UPDATE [dbo].[receber]
                                                    SET 
                                                    [receber] = ${receber.recordset[0].receber - valor_pago}
                                                    ,[tp_pago] = 1
                                                    WHERE id_venda = ${id_venda}`);
        const receb = await pool.request().query(`select * from receber where id_venda = ${id_venda}`) 
        return receb.recordset
    }
    else{
        const consulta = await pool.request().query(`UPDATE [dbo].[receber]
                                                    SET [receber] = ${receber.recordset[0].receber - valor_pago}
                                                    WHERE id_venda = ${id_venda}`);
        const receb = await pool.request().query(`select * from receber where id_venda = ${id_venda}`) 
        return receb.recordset
    }
    
}


module.exports = {
    pegarTodos,alterar,criar,pegarPorId
}