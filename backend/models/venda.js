const conexao = require('../infraestrutura/conexao');
const conexaoMysql = require('../infraestrutura/conexao_mysql').pool;
class Venda{

    getVendaPorCidade(Periodo, res){
     const query = `Select cidade as Cidade, codigo_cliente as Codigo, nome_cliente as Nome,  to_char(data_venda, 'DD/MM/YYYY') as data, vendedor as Vendedor, plano as Plano, valor as Valor, descricao as Status  from vendas where data_venda>= '${Periodo['data_inicial']}' and data_venda<= '${Periodo['data_final']}';`;
     conexao.query(query, (erro, resposta)=>{
         if(erro){console.log(erro)}
         else{
        
             res.status(200).json(resposta.rows);
         }
     })
    }
    getVendasPorVendedores(Periodo, res){
        const query = `Select vendedor as Vendedor, codigo_cliente as Codigo, nome_cliente as Nome,  to_char(data_venda, 'DD/MM/YYYY') as data, cidade as Cidade, plano as Plano, valor as Valor, descricao as Status  from vendas where data_venda>= '${Periodo['data_inicial']}' and data_venda<= '${Periodo['data_final']}' order by vendedor;`;
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
           
                res.status(200).json(resposta.rows);
            }
        })
       }
    getVendaPorCidadeTotal(Periodo, res){

          const query = `Select cidade as Cidade, count(*) as quantidade  from vendas where data_venda>= '${Periodo['data_inicial']}' and data_venda<= '${Periodo['data_final']}' group by cidade;`;
          conexao.query(query, (erro, resposta)=>{
              if(erro){console.log(erro)}
              else{
             
                  res.status(200).json(resposta.rows);
              }
          })
         }
     

    getCancelamentosPorCidade(Periodo, res){
          const query = `Select cidade as Cidade, codigo_cliente as Codigo, nome_razaosocial as Nome,  to_char(data_cancelamento, 'DD/MM/YYYY') as data, plano as Plano,motivo_cancelamento as motivo from cancelamentos where data_cancelamento>= '${Periodo['data_inicial']}' and data_cancelamento<= '${Periodo['data_final']}';`;
          conexao.query(query, (erro, resposta)=>{
              if(erro){console.log(erro)}
              else{

                  res.status(200).json(resposta.rows);
              }
          })
         }


         getCancelamentosTipo(Periodo,res){
         
            const query = `Select count(*) as quantidade, tipo_pessoa from cancelamentos where data_cancelamento>= '${Periodo['data_inicial']}' and data_cancelamento<= '${Periodo['data_final']}' Group By tipo_pessoa;`;
            conexao.query(query, (erro, resposta)=>{
                if(erro){console.log(erro)}
                else{
                    console.log(resposta.rows)
                    res.status(200).json(resposta.rows);
                }
            })
         }
       
         getVendasTipo(Periodo,res){
         
            const query = `Select count(*) as quantidade, tipo_pessoa from vendas where data_venda>= '${Periodo['data_inicial']}' and data_venda<= '${Periodo['data_final']}' Group By tipo_pessoa;`;
            conexao.query(query, (erro, resposta)=>{
                if(erro){console.log(erro)}
                else{
                    console.log(resposta.rows)
                    res.status(200).json(resposta.rows);
                }
            })
         }

         getMetasCidade(res){
            const query = ` SELECT DISTINCT cidade.nome
                            FROM cliente_servico
                            JOIN cliente_servico_endereco ON cliente_servico_endereco.id_cliente_servico = cliente_servico.id_cliente_servico
                            JOIN endereco_numero ON endereco_numero.id_endereco_numero = cliente_servico_endereco.id_endereco_numero
                            JOIN cidade ON endereco_numero.id_cidade = cidade.id_cidade
                            WHERE cliente_servico_endereco.tipo::text = 'instalacao'::text AND cliente_servico.id_servico_status = 11 AND cidade.nome::text <> 'São Paulo'::text
                            ORDER BY cidade.nome`;
            conexao.query(query, (erro, resposta)=>{
                if(erro){console.log(erro)}
                else{
                    conexaoMysql.getConnection((error, conn)=>{
                    const sql = `Select * from cidade_meta_vendas`

                        conn.query(sql, (erro, resultado)=>{
                            if(erro){
                                console.log(erro)
                            }else{
                                for(var i = 0; i< resposta.rows.length; i++){
                                    const index = resultado.findIndex((obj) => obj.cidade_nome ==resposta.rows[i]['nome'])
                                    if(index == -1){
                                        const insere = `INSERT INTO cidade_meta_vendas(cidade_nome, meta_vendas) VALUES ('${resposta.rows[i]['nome']}', 0)`;
                                        conn.query(insere, (err, result)=>{
                                            if(err){console.log(err)}
                                            else{
                                                console.log('cidade inserida com sucesso')
                                            }
                                        })
                                    }
                               
                                
                                 
                                }
                            }
                            
                            conn.release();
                        })
                        
                        })
                }
                
            })

            conexaoMysql.getConnection((error, conn)=>{
            const qry =     `SELECT * FROM cidade_meta_vendas`;
            conn.query(qry, (erro, resultado)=> {
                conn.release();
                if(erro){
                    console.log(erro)
                }else{
                    res.status(200).send(resultado)
                }
              
            })

            })
         }



         updateMetas(Dados, res){
            
            conexaoMysql.getConnection((error, conn)=>{

                Dados['newMetas'].map((item)=>{
                    const valor = parseInt(item['meta_vendas']);
                    const sql = `UPDATE cidade_meta_vendas set meta_vendas = ${valor} where id_cidade_meta_vendas = ${item['id_cidade_meta_vendas']}`;
                    conn.query(sql, (erro, resultado)=>{
                        if(erro){
                            console.log('erro')
                        }
                    })
                }) 

             })
                
             console.log('terminou')
             res.status(200).send('Metas Atualizadas')
         }


         getVendedoresAtivos(res){
            const query = `Select * from vendedores`;
            conexao.query(query, (erro, resposta)=>{
                if(erro){console.log(erro)}
                else{
               
                    res.status(200).json(resposta.rows);
                }
            })
         }

         getCidadesAtendidas(res){
            const query = `Select * from cidades_atendidas`;
            conexao.query(query, (erro, resposta)=>{
                if(erro){console.log(erro)}
                else{
               
                    res.status(200).json(resposta.rows);
                }
            })
         }
}
module.exports = new Venda;