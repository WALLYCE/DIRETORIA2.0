const cs = require('../models/cliente_servico');
const venda = require('../models/venda');
const hdtv = require('../models/hdtv');
module.exports = app => {
app.get('/cliente_servico/ativos/valor', (req,res)=> {
    cs.getServicosAtivos(res);
})

app.post('/cancelamentos/valor/tipo_pessoa', (req,res)=> {
    venda.getCancelamentosTipo(req.body, res);
})
app.post('/vendas/valor/tipo_pessoa', (req,res)=> {
    venda.getVendasTipo(req.body, res);
})

app.post('/hdtv/valor/tipo_pessoa', (req,res)=> {
    hdtv.getHdtvTipo(res);
})
app.get('/cliente_servico/valor/cidade', (req,res)=> {
    cs.getServiosValorCidade(res);
})
}