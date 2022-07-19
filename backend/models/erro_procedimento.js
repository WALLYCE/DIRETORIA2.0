const conexao = require('../infraestrutura/conexao');
class Ep{

    getErroProcedimento(res){
         
        const query = `Select * from erro_procedimento;`;
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
     }

}
module.exports = new Ep;