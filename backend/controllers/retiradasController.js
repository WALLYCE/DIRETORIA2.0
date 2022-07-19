const Cs = require('../models/cliente_servico')

module.exports = app => {
app.post('/cliente_servico/cancelamentos/retiradas', (req,res)=> {
    Cs.getCancelamentosRetiradasOnu(req.body, res);
})

}