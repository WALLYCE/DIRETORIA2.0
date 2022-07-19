const conexao = require('../infraestrutura/conexao');
class Atendimento{

     getAtendimento(protocolo, res){         
        const query = `Select * from atendimento inner join users on users.id = atendimento.id_usuario_abertura  where atendimento.protocolo = '${protocolo['protocolo']}'`;
          conexao.query(query, (erro, resposta)=>{
              if(erro){console.log(erro)}
              else{
                 console.log(protocolo)
                  res.status(200).json(resposta.rows);
              }
          })
       }

       getMensagemAtendimento(protocolo, res){         
        const query = `SELECT * FROM "atendimento_mensagem" inner join atendimento on atendimento.id_atendimento = atendimento_mensagem.id_atendimento INNER JOIN users on users."id" = atendimento_mensagem.id_usuario  where atendimento.protocolo = '${protocolo['protocolo']}'`;
          conexao.query(query, (erro, resposta)=>{
              if(erro){console.log(erro)}
              else{
                 console.log(resposta.rows)
                  res.status(200).json(resposta.rows);
              }
          })
       }

}
module.exports = new Atendimento;