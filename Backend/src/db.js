//Importa uma variavel para fazer a conexão com o banco
const sql = require('mssql');
//Importa as variaveis de ambiente do arquivo .env
require('dotenv').config();
//Objeto com a configuração do banco de dados utilizando as variaveis do arquivo .env
const config = {
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    server: process.env.DB_SERVER,
    database: process.env.DB_DATABASE,
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
};
//Cria a conexão com o banco utilizando a configuração do objeto acima
const conexao = new sql.ConnectionPool(config)
    .connect()
    .then(pool => {
        console.log('Conectado ao SQL Server');
        return pool;
    })
    .catch(err => console.log('Falha na conexão com o banco de dados: ', err));

//Exporta a variavel conexão para ser utilizada em outros lugares  
module.exports = conexao;

