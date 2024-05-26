//Cria uma variavel do tipo express utilizar de exemplo nas rotas
const express = require('express')
//Importa as funções do funcionário 
const func = require('./controller/funcController')
//Importa as funções do Cliente 
const cli = require('./controller/cliController')
//Importa as funções do Produto 
const prod = require('./controller/prodController')
//Importa as funções do Produto 
const venda = require('./controller/vendaController')
//Importa as funções do Receber 
const receb = require('./controller/receberController')
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

//Rotas do Produto
router.get('/produtos', prod.pegarTodos)
router.get('/produto/:nome', prod.pegarPorNome)
router.delete('/produto/:id', prod.deletar)
router.post('/produto', prod.criar)
router.put('/produto/:id', prod.alterar)

//Rotas da Venda
router.get('/vendas', venda.pegarTodos)
router.get('/venda/:id', venda.pegarPorId)
router.get('/numero', venda.numeroVenda)
router.delete('/venda/:id', venda.deletar)
router.post('/venda', venda.criar)

//Rotas da Receber
router.get('/receber', receb.pegarTodos)
router.get('/recebe/:id', receb.pegarPorId)
router.put('/recebe/:id', receb.alterar)
router.post('/recebe', receb.criar)


module.exports = router;