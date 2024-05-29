//Importa a conexão com o banco
const conexao = require('../../db')
//Função 
const vendasDataLucro = async (dt_inicial,dt_final) => { 
    const pool = await conexao; 
    const consulta = await pool.request().query(`
        declare @dt_inicial date = '${dt_inicial}'
        declare @dt_final date = '${dt_final}'
        
        declare cursor_id_vendas cursor for
        select id_venda from vendas
        where CAST(dt_lancamento AS DATE) >= @dt_inicial and CAST(dt_lancamento AS DATE) <= @dt_final
        group by id_venda
        open cursor_id_vendas
        DECLARE @id_vendaaaa INT
        fetch next from cursor_id_vendas into @id_vendaaaa
        while @@FETCH_STATUS = 0
        BEGIN
        
        select
        CAST(v.id_venda AS VARCHAR(100)) AS id_venda,
        CAST(v.id_cli AS VARCHAR(MAX)) + ' - ' + c.nome_cli AS nome_cli,
        CAST(v.id_func AS VARCHAR(MAX)) + ' - ' + f.nome_func AS nome_func,
        CAST(v.id_prod AS VARCHAR(MAX)) + ' - ' + p.nome_prod AS nome_prod,
		p.custo_prod,
        v.preco_prod,
        v.qntd_prod,
        v.desc_prod,
        '' as tp_venda, 
        v.total_prod,
		'' as lucro,
        '' as dt_lancamento
        from vendas v
        inner join clientes c on v.id_cli = c.id_cli
        inner join funcionarios f on v.id_func = f.id_func
        inner join produtos p on v.id_prod = p.id_prod
        where id_venda = @id_vendaaaa
        union all
        select
        '',
        '',
        '',
        '',
		sum(p.custo_prod),
        SUM(v.preco_prod),
        SUM(v.qntd_prod),
        SUM(v.desc_prod),
        v.tp_venda,
        sum(total_prod),
		CAST((sum(total_prod) - sum(p.custo_prod)) AS VARCHAR(MAX)),
        FORMAT(v.dt_lancamento, 'dd/MM/yyyy')
        from vendas v
		inner join produtos p on p.id_prod = v.id_prod
        where id_venda = @id_vendaaaa
        GROUP BY FORMAT(v.dt_lancamento, 'dd/MM/yyyy'),v.tp_venda
        fetch next from cursor_id_vendas into @id_vendaaaa
        
        END
        close cursor_id_vendas
        DEALLOCATE cursor_id_vendas`); 
    return consulta.recordsets 
};

module.exports = {
    vendasDataLucro
}