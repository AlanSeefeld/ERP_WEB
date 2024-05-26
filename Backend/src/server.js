//Cria uma variavel do tipo express para criar um servidor
const express = require('express');
//Importa tudo que esta configurado no arquivo router.js ( AS ROTAS )
const router = require('./router');
//Cria o servidor
const app = express();
//Variavel que contem a porta em que vai rodar a api
const port = process.env.PORT || 3001;
//O app ira utilizar estrutura de json no site
app.use(express.json());
//O app ira utilizar das rotas configuradas no arquivo router.js
app.use(router)
//Configuração de qual porta o servidor ira escutar para rodar
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});
//Exportação do app para ser utilizado em outros locais ( ROUTER )
module.exports = app;

