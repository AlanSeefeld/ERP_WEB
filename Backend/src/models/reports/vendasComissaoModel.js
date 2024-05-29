//Importa a conexão com o banco
const conexao = require('../../db')
//Função
const vendasComissao = async (funcionario,dt_inicial,dt_final) => { 
    const pool = await conexao; 
    const consulta = await pool.request().query(`
    declare @dt_inicial date = '${dt_inicial}'
declare @dt_final date = '${dt_final}'
declare @funcionario int = ${funcionario};

declare cursor_id_funcionarios cursor for
        select id_func from vendas
		where CAST(dt_lancamento AS DATE) >= @dt_inicial and CAST(dt_lancamento AS DATE) <= @dt_final
        AND (
             (@funcionario = 0 AND id_func IS NOT NULL)
             OR
             (@funcionario > 0 and id_func = @funcionario) 
        )
        group by id_func

open cursor_id_funcionarios
DECLARE @id_func INT
fetch next from cursor_id_funcionarios into @id_func

while @@FETCH_STATUS = 0
begin
	select 
	'' as nome_func,
	CAST(v.id_prod AS varchar(MAX)) as id_prod,
	p.nome_prod,
	sum(v.total_prod) as valor_vendido,
	CAST(p.comissao_prod AS VARCHAR(MAX))+'%' as comissao_prod,
	(sum(v.total_prod) * (p.comissao_prod/100)) as valor_comissao
	from vendas v
	inner join funcionarios f on v.id_func = f.id_func
	inner join produtos p on v.id_prod = p.id_prod
	where v.id_func = @id_func 
	group by f.nome_func,v.id_func,v.id_prod,p.nome_prod,p.comissao_prod


	union all
	select
	CAST(v.id_func AS VARCHAR(MAX))+ ' - ' + f.nome_func as nome_func,
	'',
	'',
	sum(total_prod),
	'',
	(sum(v.total_prod) * (p.comissao_prod/100)) as valor_comissao
	from vendas v
	inner join produtos p on p.id_prod = v.id_prod
	inner join funcionarios f on v.id_func = f.id_func
	where v.id_func = @id_func
	group by v.id_func,p.comissao_prod,f.nome_func

	fetch next from cursor_id_funcionarios into @id_func
end
close cursor_id_funcionarios
deallocate cursor_id_funcionarios

`)
return consulta.recordsets 
}

module.exports = {vendasComissao}