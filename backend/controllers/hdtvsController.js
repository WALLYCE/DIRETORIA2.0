const hdtv = require('../models/hdtv');

module.exports = app => {

    app.post('/hdtv/cidade', (req,res)=>{
        hdtv.getHdtvCidade(req.body, res)
    })
}