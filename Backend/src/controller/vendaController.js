//Importa as funções de modelos
const venda = require('../models/vendaModel')
///Função para pegar todos as Vendas
const pegarTodos = async (req,res) => {
    const vendas = await venda.pegarTodos();
    if(vendas.length == 0){
        return res.status(401).json({message:"Nenhuma Venda foi Lançada"})
    }else{
        return res.status(200).json(vendas)
    }
   
}
//Função para pegar venda pelo id
const pegarPorId = async (req,res) => {
    const id = req.params.id;
    const vendas = await venda.pegarPorId(id)
    return res.status(200).json(vendas)
}
//Função para deletar Venda pelo id
const deletar = async (req,res) => {
   
        const id = req.params.id;
        const venda = await venda.deletar(id)
        return res.json({message: venda})
    
    
    
}
//Função para retornar maior numero de venda
const numeroVenda = async (req,res) =>{
    const numero = await venda.numeroVenda();
    return res.json(numero)
}
//Função para criar Venda
const criar = async (req,res) => {
    try{
        const {id,cliente,func,prod,preco,qntd,desc,tp_venda} = req.body;  
        const vendas = await venda.criar(id,cliente,func,prod,preco,qntd,desc,tp_venda);
        return res.status(200).json({message:"Venda Lançada com sucesso"})
    }catch(e){
        return res.status(400).json({message:`Erro ao Lançar Venda ${e}`})
    }
    
    
    
}


module.exports = {
    pegarTodos,numeroVenda,deletar,criar,pegarPorId}