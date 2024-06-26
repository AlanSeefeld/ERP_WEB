//Importa as funções de modelos
const func = require('../models/funcModel')
///Função para pegar todos os funcionários
const pegarTodos = async (req,res) => {
    const funcionario = await func.pegarTodos();
    if(funcionario.length == 0){
        return res.status(401).json({message:"Nenhum funcionário foi cadastrado"})
    }else{
        return res.status(200).json(funcionario)
    }
   
}
//Função para pegar os 10 primeiros onde o nome começe com...
const pegarPorNome = async (req,res) => {
    const nome = req.params.nome;
    const funcionario = await func.pegarPorNome(nome)
    return res.status(200).json(funcionario)
}

//Função para pegar o funcionário para fazer login
const pegarParaLogar = async (req,res) => {
    const nome = req.params.nome;
    const senha = req.params.senha;
    const funcionario = await func.pegarParaLogar(nome,senha)
    return res.status(200).json(funcionario)
}

//Função para deletar funcionário pelo id
const deletar = async (req,res) => {
    try{
        const id = req.params.id;
        const funcionario = await func.deletar(id)
        return res.json({message: funcionario})
    }catch(e){
        return res.status(400).json({message:`Erro ao deletar Funcionário ${e}`})
    }
    
}
//Função para criar funcionário
const criar = async (req,res) => {
    const {nome,senha} = req.body;
    if ((nome == undefined || nome == '') || (senha == undefined || senha == '')){
        return res.status(404).json({message:"nome ou senha vazios"})
    }else{
        const funcionario = await func.criar(nome,senha);
        return res.status(200).json({message:"Funcionário cadastrado com sucesso"})
    }
    
}
//Função para alterar funcionário pelo id
const alterar = async (req,res) => {
    const {nome,senha} = req.body;
   
    const id = req.params.id;
    if (nome == undefined || senha == undefined){
        return res.status(401).json({message:"nome ou senha vazios"})
    }else{
        const funcionario = await func.alterar(nome,senha,id);
        return res.status(200).json(funcionario)
    }
}


module.exports = {
    pegarTodos,pegarPorNome,deletar,criar,alterar,pegarParaLogar}