const conexao = require('../infraestrutura/conexao');
class Hdtv{

    getHdtvTipo(res){
         
        const query = `Select count(*) as quantidade, tipo_pessoa from hdtv Group By tipo_pessoa;`;
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
     }

     getHdtvCidade(Periodo, res){
         const query = `Select  cidade,codigo_cliente as codigo, nome, to_char(data_habilitacao::date::timestamp with time zone, 'dd/MM/YYYY'::text) AS data from hdtv where data_habilitacao >= '${Periodo['data_inicial']}' and data_habilitacao <= '${Periodo['data_final']}';`;

    
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
     }

}
module.exports = new Hdtv;