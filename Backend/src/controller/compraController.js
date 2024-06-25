//Importa as funções de modelos
const compra = require('../models/compraModel')
///Função para pegar todos as Compras
const pegarTodos = async (req,res) => {
    const compras = await compra.pegarTodos();
    if(compras.length == 0){
        return res.status(401).json({message:"Nenhuma Compra foi Lançada"})
    }else{
        return res.status(200).json(compras)
    }
   
}
//Função para pegar Compra pelo id
const pegarPorId = async (req,res) => {
    const id = req.params.id;
    const compras = await compra.pegarPorId(id)
    return res.status(200).json(compras)
}
//Função para deletar compra pelo id
const deletar = async (req,res) => {
   
        const id = req.params.id;
        const compras = await compra.deletar(id)
        return res.json({message: compras})
    
    
    
}
//Função para retornar maior numero de compra
const numeroCompra = async (req,res) =>{
    const numero = await compra.numeroCompra();
    return res.json(numero)
}
//Função para criar Compra
const criar = async (req,res) => {
    try{
        const {id,fornecedor,produto,custo,qntd} = req.body;  
        const compras = await compra.criar(id,fornecedor,produto,custo,qntd);
        return res.status(200).json({message:"Compra Lançada com sucesso"})
    }catch(e){
        return res.status(400).json({message:`Erro ao Lançar Compra ${e}`})
    }
    
    
    
}


module.exports = {
    pegarTodos,numeroCompra,deletar,criar,pegarPorId}