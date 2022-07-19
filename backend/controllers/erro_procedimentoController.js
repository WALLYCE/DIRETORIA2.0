const Ep = require('../models/erro_procedimento')
const Atendimento = require('../models/atendimento')

module.exports = app => {
app.get('/erro_procedimento', (req,res)=> {
    Ep.getErroProcedimento(res);
})

app.post('/atendimento', (req,res)=>{
    Atendimento.getAtendimento(req.body,res);
})

app.post('/atendimento/mensagem', (req,res)=>{
    Atendimento.getMensagemAtendimento(req.body,res);
})
}