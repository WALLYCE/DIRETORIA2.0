const Config = require('../models/config')

module.exports = app => {
app.post('/login', (req,res)=> {
    Config.getLogin(req.body, res);
})

}