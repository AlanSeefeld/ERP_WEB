//Importa as funções de modelos
const compra = require('../../models/reports/comprasDataModel')
///Função 
const comprasData = async (req,res) => {
    const {dt_inicial,dt_final} = req.body
    const compras = await compra.comprasData(dt_inicial,dt_final);
    if(compras.length == 0){
        return res.status(401).json({message:"Não existe nenhuma Compra lançada nesse periodo"})
    }else{
        return res.status(200).json(compras)
    }
   
}

module.exports = {
    comprasData}