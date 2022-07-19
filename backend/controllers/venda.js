const Vendas = require('../models/venda')

module.exports = app => {
app.post('/vendas/cidade', (req,res)=> {
    Vendas.getVendaPorCidade(req.body, res);
})
app.post('/vendas/cidade/total', (req,res)=> {
    Vendas.getVendaPorCidadeTotal(req.body, res);
})

app.post('/cancelamentos_cidade', (req,res)=> {
    Vendas.getCancelamentosPorCidade(req.body, res);
});

app.get('/metas', (req,res)=> {
    Vendas.getMetasCidade(res);
})
app.patch('/metas', (req, res)=>{
    console.log('chamou')
    Vendas.updateMetas(req.body, res)
})

app.get('/vendas/vendedores/ativos', (req, res)=>{
    Vendas.getVendedoresAtivos(res);
})

app.get('/cidades/atendidas', (req, res)=>{
    Vendas.getCidadesAtendidas(res);
})
}