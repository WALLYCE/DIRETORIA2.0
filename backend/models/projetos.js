const conexao = require('../infraestrutura/conexao');
class projetos{

    getProjetosTipo(res){
         
        const query = `Select count(*) as quantidade, tipo_pessoa from projetos_abertos Group By tipo_pessoa`;

        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
     }

     getProjetosErrosTipo(res){
        const query = `Select count(*) as quantidade, tipo_pessoa from projetos_erro Group By tipo_pessoa`;

        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
     }

}
module.exports = new projetos;