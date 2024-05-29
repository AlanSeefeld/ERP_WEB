//Importa as funções de modelos
const venda = require('../../models/reports/vendasLucroModel')
///Função 
const vendasDataLucro = async (req,res) => {
    const {data_inicial,data_final} = req.body
    const vendas = await venda.vendasDataLucro(data_inicial,data_final);
    if(vendas.length == 0){
        return res.status(401).json({message:"Não existe nenhuma Venda lançada nesse periodo"})
    }else{
        return res.status(200).json(vendas)
    }
   
}

module.exports = {
    vendasDataLucro}