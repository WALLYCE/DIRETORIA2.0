const conexao = require('../infraestrutura/conexao');

class clientes_em_inadimplencia{

    getClientesInadimplentes(Dados,res){
        const query = `SELECT codigo as id, nome, plano, cidade, faturas, CONCAT((faturas*30)::text, ' dias') as tempo, valor, status from clientes_em_inadimplencia where faturas>=${Dados['minimo']}`;
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
    }


}module.exports = new clientes_em_inadimplencia;