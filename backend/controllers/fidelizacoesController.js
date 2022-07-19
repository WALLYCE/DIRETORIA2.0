const Fidelizacoes = require('../models/fidelizacoes')

module.exports = app => {
app.post('/fidelizacoes/cidade', (req,res)=> {
    Fidelizacoes.getFidelizacoesCidade(req.body, res);
})
app.post('/migracoes/cidade', (req,res)=> {
    Fidelizacoes.getMigracoesCidade(req.body, res);
})
}