//Importa a conexão com o banco
const conexao = require('../db')
//Função para pegar todos as Agendas
const pegarTodos = async () => { 
    const pool = await conexao; 
    const consulta = await pool.request().query(`select
                                                a.id_agenda,
                                                CONVERT(VARCHAR, a.dt_agenda, 103) as dt_agenda,
                                                a.hr_agenda,
                                                c.nome_cli,
                                                f.nome_func,
                                                p.nome_prod
                                                from agendas a
                                                inner join clientes c on c.id_cli = a.id_cli
                                                inner join funcionarios f on f.id_func = a.id_func
                                                inner join produtos p on p.id_prod = a.id_prod`); 
    return consulta.recordset; 
};
//Função para pegar as compras por data
const pegarPordata = async (funcionario,dt_inicial,dt_final) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`declare @funcionario int = ${funcionario}
                                                select
                                                a.id_agenda,
                                                CONVERT(VARCHAR, a.dt_agenda, 103) as dt_agenda,
                                                a.hr_agenda,
                                                c.nome_cli,
                                                f.nome_func,
                                                p.nome_prod
                                                from agendas a
                                                inner join clientes c on c.id_cli = a.id_cli
                                                inner join funcionarios f on f.id_func = a.id_func
                                                inner join produtos p on p.id_prod = a.id_prod
                                                where dt_agenda between '${dt_inicial}' and '${dt_final}'
                                                AND (
                                                        (@funcionario = 0 AND a.id_func IS NOT NULL)
                                                        OR
                                                        (@funcionario > 0 and a.id_func = @funcionario) 
                                                    );`);
    return consulta.recordset; 
   
    
}
//Função para deletar Agenda pelo id
const deletar = async (id) => {
    const pool = await conexao; 
    const agenda = await pool.request().query(`select id_agenda from agendas where id_agenda = ${id}`);
    if(agenda.recordset.length == 0){
        return "A Agenda não existe"
    }else{
        const consulta2 = await pool.request().query(`delete from agendas where id_agenda = ${id}`);
        return "Agenda deletada com sucesso"
    }
    
}
//Função para retornar maior numero da Agenda
const numeroAgenda = async ()=>{
    const pool = await conexao; 
    const consulta = await pool.request().query(`SELECT COALESCE(MAX(id_agenda)+1, 1) as id FROM agendas`)
    return consulta.recordset
}
//Função para fazer Agenda
const criar = async (id,data,hora,cliente,funcionario,produto) => {
    const pool = await conexao; 
    const consulta = await pool.request().query(`INSERT INTO [dbo].[agendas]
                                                ([id_agenda]
                                                ,[dt_agenda]
                                                ,[hr_agenda]
                                                ,[id_cli]
                                                ,[id_func]
                                                ,[id_prod])
                                                VALUES
                                                (${id}
                                                ,'${data}'
                                                ,'${hora}'
                                                ,${cliente}
                                                ,${funcionario}
                                                ,${produto})`);
    return consulta
}


module.exports = {
    pegarTodos,numeroAgenda,deletar,criar,pegarPordata
}