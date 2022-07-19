const projetos = require('../models/projetos')



module.exports = app => {
app.get('/projetos/tipo', (req,res)=> {
    projetos.getProjetosTipo(res);
})

app.get('/projetos/erro/tipo', (req,res)=> {
    projetos.getProjetosErrosTipo(res);
})


}


