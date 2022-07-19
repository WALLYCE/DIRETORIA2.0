const conexao = require('../infraestrutura/conexao');
class Renovacoes
{

     getRenovacoesCidade(Periodo, res){         
        const query = `Select cidade as Cidade, cod_cliente as Codigo, nome_cliente as Nome,  to_char(data_contrato, 'DD/MM/YYYY') as data, vendedor as Vendedor, plano as Plano, valor as Valor from renovacoes where data_contrato>= '${Periodo['data_inicial']}' and data_contrato<= '${Periodo['data_final']}';`;
          conexao.query(query, (erro, resposta)=>{
              if(erro){console.log(erro)}
              else{
                 console.log(resposta.rows)
                  res.status(200).json(resposta.rows);
              }
          })
       }





}
module.exports = new Renovacoes;