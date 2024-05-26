//Cria uma variavel do tipo express utilizar de exemplo nas rotas
const express = require('express')
//Importa as funções do funcionário 
const func = require('./controller/funcController')
//Importa as funções do Cliente 
const cli = require('./controller/cliController')
//Cria um novo roteador do
const router = express.Router()
//Rotas do funcionário
router.get('/funcionarios', func.pegarTodos)
router.get('/funcionario/:nome', func.pegarPorNome)
router.delete('/funcionario/:id', func.deletar)
router.post('/funcionario', func.criar)
router.put('/funcionario/:id', func.alterar)

//Rotas do Cliente
router.get('/clientes', cli.pegarTodos)
router.get('/cliente/:nome', cli.pegarPorNome)
router.delete('/cliente/:id', cli.deletar)
router.post('/cliente', cli.criar)
router.put('/cliente/:id', cli.alterar)

module.exports = router;