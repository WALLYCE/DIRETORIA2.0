const conexao = require('../infraestrutura/conexao');

class cs{
    
getServicosAtivos(res){
        const query = `SELECT count(*) AS quantidade, cliente.tipo_pessoa FROM cliente_servico JOIN servico_status on servico_status.id_servico_status = cliente_servico.id_servico_status inner join cliente on cliente.id_cliente = cliente_servico.id_cliente WHERE (servico_status.id_servico_status = 11 OR servico_status.id_servico_status = 12 OR servico_status.id_servico_status = 14) and cliente.nome_razaosocial::text !~~ '%TESTE%'::text AND cliente.nome_razaosocial::text !~~ '%ESERV%'::text AND cliente.nome_razaosocial::text !~~ '%RICARDO JOSE OLIVEIRA NEVES%'::text GROUP BY cliente.tipo_pessoa`;
        conexao.query(query, (erro, resposta)=>{
            if(erro){console.log(erro)}
            else{
                console.log(resposta.rows)
                res.status(200).json(resposta.rows);
            }
        })
        }
getServiosValorCidade(res){
    const query = `SELECT count(*) AS quantidade, cidade.nome as cidade FROM cliente_servico JOIN cliente_servico_endereco ON cliente_servico.id_cliente_servico = cliente_servico_endereco.id_cliente_servico JOIN endereco_numero ON endereco_numero.id_endereco_numero = cliente_servico_endereco.id_endereco_numero JOIN cidade ON endereco_numero.id_cidade = cidade.id_cidade JOIN servico_status ON servico_status.id_servico_status = cliente_servico.id_servico_status WHERE (servico_status.id_servico_status = 11 OR servico_status.id_servico_status = 12 OR servico_status.id_servico_status = 14) AND cliente_servico_endereco.tipo::text = 'instalacao'::text GROUP BY cidade.nome`;
    conexao.query(query, (erro, resposta)=>{
        if(erro){console.log(erro)}
        else{
            console.log(resposta.rows)
            res.status(200).json(resposta.rows);
        }
    })
}

getCidades(res){
    const query = `SELECT distinct cidade.nome as cidade FROM cliente_servico JOIN cliente_servico_endereco ON cliente_servico.id_cliente_servico = cliente_servico_endereco.id_cliente_servico JOIN endereco_numero ON endereco_numero.id_endereco_numero = cliente_servico_endereco.id_endereco_numero JOIN cidade ON endereco_numero.id_cidade = cidade.id_cidade JOIN servico_status ON servico_status.id_servico_status = cliente_servico.id_servico_status WHERE (servico_status.id_servico_status = 11 OR servico_status.id_servico_status = 12 OR servico_status.id_servico_status = 14) AND cliente_servico_endereco.tipo::text = 'instalacao'::text GROUP BY cidade.nome`;
    conexao.query(query, (erro, resposta)=>{
        if(erro){console.log(erro)}
        else{
            console.log(resposta.rows)
            res.status(200).json(resposta.rows);
        }
    })
}

getTempoContrato(res){
    const query = `SELECT * from clientes_vencimento_contrato`;
    conexao.query(query, (erro, resposta)=>{
        if(erro){console.log(erro)}
        else{
            console.log(resposta.rows)
            res.status(200).json(resposta.rows);
        }
    })
}

getCancelamentosRetiradasOnu(Dados, res){
const query = `SELECT * from clientes_servicos_onus_retiradas where data_cancelamento>= '${Dados['data_inicial']}' and data_cancelamento<= '${Dados['data_final']}' `;
conexao.query(query, (erro, resposta)=>{
    if(erro){console.log(erro)}
    else{
        console.log(resposta.rows)
        res.status(200).json(resposta.rows);
    }
})
}
}
module.exports = new cs;