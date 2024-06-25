// Importa o express para criar um servidor
const express = require('express');

// Importa o cors para permitir requisições de outras origens
const cors = require('cors');

// Importa as rotas configuradas no arquivo router.js
const router = require('./router');

// Cria o servidor
const app = express();

// Habilita o CORS para todas as requisições
app.use(cors());

// Variável que contém a porta em que a API vai rodar
const port = process.env.PORT || 3001;

// O app vai usar estrutura de JSON
app.use(express.json());

// O app vai utilizar as rotas configuradas no arquivo router.js
app.use(router);

// Configuração de qual porta o servidor vai escutar para rodar
app.listen(port, () => {
    console.log(`Servidor rodando em http://localhost:${port}`);
});

// Exportação do app para ser utilizado em outros locais (router)
module.exports = app;
