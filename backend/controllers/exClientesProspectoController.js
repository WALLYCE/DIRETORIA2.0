const clientes_inativos_prospecto = require('../models/clientes_inativos_prospecto')

module.exports = app => {
app.post('/clientes_inativos_prospecto', (req,res)=> {
    clientes_inativos_prospecto.getClientesInadimplentes(req.body, res);
})
app.get('/clientes_inativos_prospecto/cidades', (req,res)=> {
    clientes_inativos_prospecto.getCidades(res);
})
}