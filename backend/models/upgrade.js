const conexao = require('../infraestrutura/conexao');
class Upgrade{

    getUpgradeCidade(Periodo, res){         
      const query = `Select cidade as Cidade, cod_cliente as Codigo, nome_cliente as Nome,  to_char(data_contrato, 'DD/MM/YYYY') as data, vendedor as Vendedor, plano as Plano,status, valor as Valor, plano_antigo as "Plano(Anterior)"  from upgrade where data_contrato>= '${Periodo['data_inicial']}' and data_contrato <= '${Periodo['data_final']}';`;
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
               console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
     }



       

       getUpgradeVendedores(Periodo, res){         
        const query = `Select vendedor as Vendedor, cod_cliente as Codigo, nome_cliente as Nome,  to_char(data_contrato, 'DD/MM/YYYY') as data, cidade as Cidade, plano as Plano, valor as Valor, plano_antigo as "Plano(Anterior)"  from upgrade where data_contrato>= '${Periodo['data_inicial']}' and data_contrato<= '${Periodo['data_final']}';`;
          conexao.query(query, (erro, resposta)=>{
              if(erro){console.log(erro)}
              else{
                 console.log(resposta.rows)
                  res.status(200).json(resposta.rows);
              }
          })
       }


}
module.exports = new Upgrade;