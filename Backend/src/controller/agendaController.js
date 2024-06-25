//Importa as funções de modelos
const agen = require('../models/agendaModel')
///Função para pegar todos as Agendas
const pegarTodos = async (req,res) => {
    const agendas = await agen.pegarTodos();
    if(agendas.length == 0){
        return res.status(401).json({message:"Não existe nenhuma agenda"})
    }else{
        return res.status(200).json(agendas)
    }
   
}
//Função para pegar as agendas por data
const pegarPordata = async (req,res) => {
    const {funcionario,dt_inicial,dt_final} = req.body
    const agendas = await agen.pegarPordata(funcionario,dt_inicial,dt_final)
    return res.status(200).json(agendas)
}
//Função para deletar Agenda pelo id
const deletar = async (req,res) => {
   
        const id = req.params.id;
        const agendas = await agen.deletar(id)
        return res.json({message: agendas})
    
    
    
}
//Função para retornar maior numero de agenda
const numeroAgenda = async (req,res) =>{
    const numero = await agen.numeroAgenda();
    return res.json(numero)
}
//Função para lançar agenda
const criar = async (req,res) => {
    try{
        const {id,data,hora,cliente,funcionario,produto} = req.body;  
        const agendas = await agen.criar(id,data,hora,cliente,funcionario,produto);
        return res.status(200).json({message:"Agenda Lançada com sucesso"})
    }catch(e){
        return res.status(400).json({message:`Erro ao Lançar Agenda ${e}`})
    }
    
    
    
}


module.exports = {
    pegarTodos,numeroAgenda,deletar,criar,pegarPordata}