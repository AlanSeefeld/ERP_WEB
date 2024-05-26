//Cria uma variavel do tipo express utilizar de exemplo nas rotas
const express = require('express')
//Importa as funções do funcionário 
const func = require('./controller/funcController')
//Cria um novo roteador do
const router = express.Router()

router.get('/funcionarios', func.pegarTodos)
router.get('/funcionario/:nome', func.pegarPorNome)
router.delete('/funcionario/:id', func.deletar)
router.post('/funcionario', func.criar)
router.put('/funcionario/:id', func.alterar)

module.exports = router;