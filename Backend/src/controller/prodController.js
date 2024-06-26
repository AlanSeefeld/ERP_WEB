//Importa as funções de modelos
const cli = require('../models/prodModel')
///Função para pegar todos os produtos
const pegarTodos = async (req,res) => {
    const produto = await cli.pegarTodos();
    if(produto.length == 0){
        return res.status(401).json({message:"Nenhum Produto foi cadastrado"})
    }else{
        return res.status(200).json(produto)
    }
   
}
//Função para pegar os 10 primeiros onde o nome começe com...
const pegarPorNome = async (req,res) => {
    const nome = req.params.nome;
    const produto = await cli.pegarPorNome(nome)
    return res.status(200).json(produto)
}
//Função para deletar Produto pelo id
const deletar = async (req,res) => {
    try{
        const id = req.params.id;
        const produto = await cli.deletar(id)
        return res.json({message: produto})
    }catch(e){
        return res.status(400).json({message:`Erro ao deletar Produto ${e}`})
    }
    
}
//Função para criar Produto
const criar = async (req,res) => {
    const {tipo,nome,custo,preco,com,est} = req.body;
    try{
        if (tipo == '' || nome == '' || custo == '' || preco == '' || com == ''){
            return res.status(404).json({message:"Campos vazios"})
        }else{
            const produto = await cli.criar(tipo,nome,custo,preco,com,est);
            return res.status(200).json({message:"Produto cadastrado com sucesso"})
        }
    }catch(e){
        return res.status(404).json({message:`Erro ao Cadastrar Produto ${e}`})
    }
    
    
}
//Função para alterar Produto pelo id
const alterar = async (req,res) => {
    const {tipo,nome,custo,preco,com,est} = req.body;
   
    const id = req.params.id;
    
    const produto = await cli.alterar(tipo,nome,custo,preco,com,est,id);
    return res.status(200).json(produto)
    
}


module.exports = {
    pegarTodos,pegarPorNome,deletar,criar,alterar}