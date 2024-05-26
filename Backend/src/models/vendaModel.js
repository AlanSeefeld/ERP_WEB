//Importa a conexão com o banco
const conexao = require('../db')
//Função para pegar todos as Vendas
const pegarTodos = async () => { 
    const pool = await conexao; 
    const consulta = await pool.request().query(`select v.id_venda as id,
                                                cli.nome_cli as cliente,
                                                fun.nome_func as funcionario,
                                                prod.nome_prod as produto,
                                                v.preco_prod as preco,
                                                v.qntd_prod as qntd,
                                                v.desc_prod as desconto, 
                                                v.tp_venda as tipo,
                                                v.total_prod as total,
                                                v.dt_lancamento as data from vendas v
                                                inner join clientes cli on cli.id_cli = v.id_cli
                                                inner join funcionarios fun on fun.id_func = v.id_func
                                                inner join produtos prod on prod.id_prod = v.id_prod`); 
    return consulta.recordset; 
};
//Função para pegar a venda pelo id
const pegarPorId = async (id) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`select v.id_venda as id,
                                                cli.nome_cli as cliente,
                                                fun.nome_func as funcionario,
                                                prod.nome_prod as produto,
                                                v.preco_prod as preco,
                                                v.qntd_prod as qntd,
                                                v.desc_prod as desconto, 
                                                v.tp_venda as tipo,
                                                v.total_prod as total,
                                                v.dt_lancamento as data from vendas v
                                                inner join clientes cli on cli.id_cli = v.id_cli
                                                inner join funcionarios fun on fun.id_func = v.id_func
                                                inner join produtos prod on prod.id_prod = v.id_prod
                                                where id_venda = ${id}`);
    return consulta.recordset; 
   
    
}
//Função para deletar Venda pelo id
const deletar = async (id) => {
    const pool = await conexao; 
    const venda = await pool.request().query(`select id_venda from vendas where id_venda = ${id}`);
    if(venda.recordset.length == 0){
        return "A Venda não foi lançada"
    }else{
        const consulta2 = await pool.request().query(`delete from vendas where id_venda = ${id} delete from receber where id_venda = ${id}`);
        return "Venda deletada com sucesso"
    }
    
}
//Função para retornar maior numero de venda
const numeroVenda = async ()=>{
    const pool = await conexao; 
    const consulta = await pool.request().query(`SELECT COALESCE(MAX(id_venda)+1, 0) as id FROM vendas`)
    return consulta.recordset
}
//Função para lançar venda
const criar = async (id,cliente,func,prod,preco,qntd,desc,tp_venda) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`INSERT INTO [dbo].[vendas]
                                                ([id_venda]
                                                ,[id_cli]
                                                ,[id_func]
                                                ,[id_prod]
                                                ,[preco_prod]
                                                ,[qntd_prod]
                                                ,[desc_prod]
                                                ,[tp_venda]
                                                ,[total_prod]
                                                ,[dt_lancamento])
                                                VALUES
                                                (${id}
                                                ,${cliente}
                                                ,${func}
                                                ,${prod}
                                                ,${preco}
                                                ,${qntd}
                                                ,${desc}
                                                ,'${tp_venda}'
                                                ,${(qntd * preco)-desc}
                                                ,CURRENT_TIMESTAMP)`);
    return consulta
}


module.exports = {
    pegarTodos,numeroVenda,deletar,criar,pegarPorId
}