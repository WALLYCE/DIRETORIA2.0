const conexao = require('../infraestrutura/conexao');

class Setor_Venda{

    getVendaPorSetor(Periodo, res){
     const query = `Select descricao as Setor, codigo_cliente as Codigo, nome_cliente as Nome,  to_char(data_venda, 'DD/MM/YYYY') as data, vendedor as Vendedor, plano as Plano, valor as Valor, cidade as cidade  from venda_setor where data_venda>= '${Periodo['data_inicial']}' and data_venda<= '${Periodo['data_final']}';`;
     conexao.query(query, (erro, resposta)=>{
         if(erro){console.log(erro)}
         else{
        
             res.status(200).json(resposta.rows);
         }
     })
    }

}
module.exports = new Setor_Venda;