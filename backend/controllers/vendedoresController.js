const Venda = require('../models/venda')
const Fidelizacoes = require('../models/fidelizacoes')
const Upgrade = require('../models/upgrade')


module.exports = app => {
app.post('/vendas/vendedores', (req,res)=> {
    Venda.getVendasPorVendedores(req.body, res);
})
app.post('/upgrade/vendedor', (req,res)=> {
        Upgrade.getUpgradeVendedores(req.body, res);
})

app.post('/migracoes/vendedores', (req,res)=> {
        Fidelizacoes.getMigracoesVendedores(req.body, res);
})
}
