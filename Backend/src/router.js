//Cria uma variavel do tipo express utilizar de exemplo nas rotas
const express = require('express')
//Importa as funções do funcionário 
const func = require('./controller/funcController')
//Importa as funções do Cliente 
const cli = require('./controller/cliController')
//Importa as funções do Produto 
const prod = require('./controller/prodController')
//Importa as funções do Venda 
const venda = require('./controller/vendaController')
//Importa as funções do Receber 
const receb = require('./controller/receberController')
//Importa as funções do Compra 
const compra = require('./controller/compraController')
//Importa as funções do Agenda 
const agenda = require('./controller/agendaController')
//RELATORIOS
const relVendas = require('./controller/reports/vendasLucroCotroller')
const relVendas2 = require('./controller/reports/vendasComissaoController')
const relVendas3 = require('./controller/reports/comprasDataController')
//Cria um novo roteador do app
const router = express.Router()
//Rotas do funcionário
router.get('/funcionario', func.pegarTodos)
router.get('/funcionarioL/:nome/:senha', func.pegarParaLogar)
router.get('/funcionario/:nome', func.pegarPorNome)
router.delete('/funcionario/:id', func.deletar)
router.post('/funcionario', func.criar)
router.put('/funcionario/:id', func.alterar)

//Rotas do Cliente
router.get('/cliente', cli.pegarTodos)
router.get('/cliente/:nome', cli.pegarPorNome)
router.delete('/cliente/:id', cli.deletar)
router.post('/cliente', cli.criar)
router.put('/cliente/:id', cli.alterar)

//Rotas do Produto
router.get('/produto', prod.pegarTodos)
router.get('/produto/:nome', prod.pegarPorNome)
router.delete('/produto/:id', prod.deletar)
router.post('/produto', prod.criar)
router.put('/produto/:id', prod.alterar)

//Rotas da Venda
router.get('/vendas', venda.pegarTodos)
router.get('/venda/:id', venda.pegarPorId)
router.get('/numeroVenda', venda.numeroVenda)
router.delete('/venda/:id', venda.deletar)
router.post('/venda', venda.criar)

//Rotas da Receber
router.get('/receber', receb.pegarTodos)
router.get('/recebe/:id', receb.pegarPorId)
router.put('/recebe/:id', receb.alterar)
router.post('/recebe', receb.criar)

//Rotas da Compra
router.get('/compras', compra.pegarTodos)
router.get('/compra/:id', compra.pegarPorId)
router.get('/numeroCompra', compra.numeroCompra)
router.delete('/compra/:id', compra.deletar)
router.post('/compra', compra.criar)

//Rotas da Agenda
router.get('/agendas', agenda.pegarTodos)
router.get('/agenda', agenda.pegarPordata)
router.get('/numeroAgenda', agenda.numeroAgenda)
router.delete('/agenda/:id', agenda.deletar)
router.post('/agenda', agenda.criar)

router.get('/relVendas', relVendas.vendasDataLucro)
router.get('/relVendas2', relVendas2.vendasComissao)
router.get('/relVendas3', relVendas3.comprasData)

module.exports = router;