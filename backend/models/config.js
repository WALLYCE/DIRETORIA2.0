const conexaoMysql = require('../infraestrutura/conexao_mysql').pool
const jwt = require('jsonwebtoken')
class config{

    getLogin(dados, res){
        console.log(dados)
        conexaoMysql.getConnection((error, conn)=>{
            const sql = `Select * from users where users.name = '${dados['user']}' and users.password = '${dados['password']}'`

                conn.query(sql, (erro, resultado)=>{
                    if(erro){
                        console.log(erro)
                    }else{
                        console.log(resultado)
                        if(resultado.length > 0){
                            console.log('maior que 0')
                             jwt.sign({userId: resultado['id_users']},process.env.JWT_SECRET, {expiresIn: 10800} )
                        }else{
                            console.log('Usuario e senha errado')
                        }
                        res.send(resultado)
                    }
                })
            })
    }

}
module.exports = new config;