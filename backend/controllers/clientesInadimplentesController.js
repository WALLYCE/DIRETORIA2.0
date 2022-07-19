const ClientesInadimplentes = require('../models/clientes_em_inadimplencia')

module.exports = app => {
app.post('/clientes_inadimplentes', (req,res)=> {
    ClientesInadimplentes.getClientesInadimplentes(req.body, res);
})

}