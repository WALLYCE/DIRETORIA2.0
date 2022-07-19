const conexao = require('../infraestrutura/conexao');
class tecnicos_map{

    getOsRealizadasTecnicosMap(Periodo, res){
         
        const query = `Select * from os_realizada_concluida_map where data_termino >= '${Periodo['data_inicial']}' and data_termino <= '${Periodo['data_final']}'`;
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
        
     }


     getOsManutencaoClientes(Periodo, res){
         
        const query = `Select * from os_manutencao_clientes_map where data_termino >= '${Periodo['data_inicial']}' and data_termino <= '${Periodo['data_final']}'`;
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
        
     }

}
module.exports = new  tecnicos_map;