const conexao = require('../infraestrutura/conexao');

class clientes_inativos_prospecto{

    getClientesInadimplentes(Dados,res){
        var query = '';
        if(Dados['fprospecto'] == 0){
            query = `SELECT * from clientes_inativos_prospecto where cidade ='${Dados['city']}'`;
        }else if(Dados['fprospecto'] == -1){
             query = `SELECT * from clientes_inativos_prospecto where cidade ='${Dados['city']}' and prospecto='-1'`;
        }else{
             query = `SELECT * from clientes_inativos_prospecto where cidade ='${Dados['city']}' and prospecto<>'-1'`;
        }
        
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
    }

    getCidades(res){
        const query = `SELECT distinct cidade from clientes_inativos_prospecto order by cidade`;
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
    }


}module.exports = new clientes_inativos_prospecto;