//Importa as funções de modelos
const receb = require('../models/receberModel')
///Função para pegar todos as Vendas a receber
const pegarTodos = async (req,res) => {
    const receber = await receb.pegarTodos();
    if(receber.length == 0){
        return res.status(401).json({message:"Não existe nenhuma venda a receber"})
    }else{
        return res.status(200).json(receber)
    }
   
}
//Função para pegar venda pelo id do cliente
const pegarPorId = async (req,res) => {
    const id = req.params.id;
    const receber = await receb.pegarPorId(id)
    return res.status(200).json(receber)
}

//Função para lançar parcela
const criar = async (req,res) => {
    try{
        const {id_venda} = req.body;  
        const receber = await receb.criar(id_venda);
        return res.status(200).json({message: receber})
    }catch(e){
        return res.status(400).json({message:`Erro ao Lançar Parcela ${e}`})
    }   
    
}

const alterar = async (req,res) => {
    const id_venda = req.params.id;
    const {valor_pago} = req.body;  
    const receber = await receb.alterar(valor_pago,id_venda);
    return res.status(200).json(receber)
}


module.exports = {
    pegarTodos,alterar,criar,pegarPorId}