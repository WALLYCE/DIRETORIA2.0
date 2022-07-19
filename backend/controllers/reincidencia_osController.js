const Reincidencia_OS = require('../models/reincidencia_os')

module.exports = app => {
app.post('/reincidencia_os', (req,res)=> {
    Reincidencia_OS.getRencidiencia_os(req.body, res);
})

}