const conexao = require('../infraestrutura/conexao');
class Reincidencia_OS{

    getRencidiencia_os(Dados, res){
        const query = `Select  cod_cliente as "codigo", nome_cliente as nome, plano, tipo_os as tipo, count(*) as quantidade, status from os_com_reincidencia where data_cadastro::date >='${Dados['data_inicial']}' and data_cadastro::date<='${Dados['data_final']}'  Group By (cod_cliente, nome_cliente, plano, tipo_os, status) HAVING count(*) >=${Dados['minimo']} order by quantidade DESC`;
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
           
                res.status(200).json(resposta.rows);
            }
        })
    }

}
module.exports = new Reincidencia_OS;