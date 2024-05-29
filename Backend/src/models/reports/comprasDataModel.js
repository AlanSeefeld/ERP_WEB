//Importa a conexão com o banco
const conexao = require('../../db')
//Função
const comprasData = async (dt_inicial,dt_final) => { 
    const pool = await conexao; 
    const consulta = await pool.request().query(`
    declare @dt_inicial date = '${dt_inicial}'
declare @dt_final date = '${dt_final}'

declare cursor_id_compras cursor for
select id_compra from compras
where CAST(dt_lancamento AS DATE) >= @dt_inicial and CAST(dt_lancamento AS DATE) <= @dt_final
group by id_compra
open cursor_id_compras
DECLARE @id_compra INT
fetch next from cursor_id_compras into @id_compra
while @@FETCH_STATUS = 0
BEGIN
	select 
	'',
	'' as fornecedor,
	CAST(c.id_prod as varchar(max)) + ' - ' + p.nome_prod as produto,
	c.custo_prod,
	c.total_prod,
	'' as dt_lancamento
	from compras c
	inner join produtos p on p.id_prod = c.id_prod
	where c.id_compra = @id_compra

	union all
	select 
	CAST(c.id_compra AS varchar(MAX)),
	c.fornecedor,
	'',
	sum(c.custo_prod),
	sum(c.total_prod),
	FORMAT(c.dt_lancamento, 'dd/MM/yyyy')
	from compras c
	where c.id_compra = @id_compra
	group by FORMAT(c.dt_lancamento, 'dd/MM/yyyy'),c.fornecedor,c.id_compra

	fetch next from cursor_id_compras into @id_compra
END
close cursor_id_compras
deallocate cursor_id_compras
    `)
return consulta.recordsets 
}

module.exports= {comprasData}