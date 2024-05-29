//Importa as funções de modelos
const venda = require('../../models/reports/vendasComissaoModel')
///Função 
const vendasComissao = async (req,res) => {
    const {funcionario,dt_inicial,dt_final} = req.body
    const vendas = await venda.vendasComissao(funcionario,dt_inicial,dt_final);
    if(vendas.length == 0){
        return res.status(401).json({message:"Não existe nenhuma Venda lançada nesse periodo"})
    }else{
        return res.status(200).json(vendas)
    }
   
}

module.exports = {
    vendasComissao}