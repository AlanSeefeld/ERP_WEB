const func = require('../models/funcModel')


const pegarTodos = async (req,res) => {
    const teste = await func.pegarTodos();
    return res.status(200).json(teste)
}

const pegarPorNome = async (req,res) => {
    const nome = req.params.nome;
    const teste = await func.pegarPorNome(nome)
    return res.status(200).json(teste)
}


module.exports = {
    pegarTodos,pegarPorNome}