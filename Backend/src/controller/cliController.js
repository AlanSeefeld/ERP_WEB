//Importa as funções de modelos
const cli = require('../models/cliModel')
///Função para pegar todos os Clientes
const pegarTodos = async (req,res) => {
    const cliente = await cli.pegarTodos();
    if(cliente.length == 0){
        return res.status(401).json({message:"Nenhum Cliente foi cadastrado"})
    }else{
        return res.status(200).json(cliente)
    }
   
}
//Função para pegar os 10 primeiros onde o nome começe com...
const pegarPorNome = async (req,res) => {
    const nome = req.params.nome;
    const cliente = await cli.pegarPorNome(nome)
    return res.status(200).json(cliente)
}
//Função para deletar Cliente pelo id
const deletar = async (req,res) => {
    try{
        const id = req.params.id;
        const cliente = await cli.deletar(id)
        return res.json({message: cliente})
    }catch(e){
        return res.status(400).json({message:`Erro ao deletar cliente ${e}`})
    }
    
}
//Função para criar Cliente
const criar = async (req,res) => {
    const {tipo,nome,doc,tel} = req.body;
    
    const cliente = await cli.criar(tipo,nome,doc,tel);
    return res.status(200).json({message:"Cliente cadastrado com sucesso"})
    
    
}
//Função para alterar Cliente pelo id
const alterar = async (req,res) => {
    const {tipo,nome,doc,tel} = req.body;
    
    const id = req.params.id;
   
    const funcionario = await cli.alterar(tipo,nome,doc,tel,id);
    return res.status(200).json(funcionario)
    
}


module.exports = {
    pegarTodos,pegarPorNome,deletar,criar,alterar}