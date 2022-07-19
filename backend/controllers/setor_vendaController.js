const Venda = require('../models/venda')
const Fidelizacoes = require('../models/fidelizacoes')
const Setor_Venda = require('../models/setor_venda')

module.exports = app => {
app.post('/setor/venda', (req,res)=> {
    Setor_Venda.getVendaPorSetor(req.body, res);
})

}