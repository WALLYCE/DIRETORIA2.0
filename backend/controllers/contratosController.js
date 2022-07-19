const Upgrade = require('../models/upgrade')
const Migracoes = require('../models/migracoes')
const Renovacoes = require('../models/renovacoes')
module.exports = app => {
app.post('/upgrade/cidade', (req,res)=> {
    Upgrade.getUpgradeCidade(req.body, res);
})

app.post('/migracoes/cidade', (req,res)=> {
   Migracoes.getMigracoesCidade(req.body, res);
})

app.post('/renovacoes/cidade', (req,res)=> {
    Renovacoes.getRenovacoesCidade(req.body, res);
 })


}