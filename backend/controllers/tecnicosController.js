const Tecnicos = require('../models/tecnicos_map')

module.exports = app => {
app.post('/os/realizadas/map', (req,res)=> {
    Tecnicos.getOsRealizadasTecnicosMap(req.body, res);
})


app.post('/os/manutencao/clientes/map', (req,res)=> {
    Tecnicos.getOsManutencaoClientes(req.body, res);
})


}