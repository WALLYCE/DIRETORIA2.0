const Cs = require('../models/cliente_servico')

module.exports = app => {
app.get('/cliente_servico/cidades', (req,res)=> {
    Cs.getCidades(res);
})
app.get('/cliente_servico/contrato/tempo', (req,res)=>{
    Cs.getTempoContrato(res);
})
}