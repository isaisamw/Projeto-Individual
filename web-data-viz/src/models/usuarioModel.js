var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", email, senha)
    var instrucaoSql = `
        SELECT idUsuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(nome, email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", nome, email, senha);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarPersonalidade(fkUsuario, fkPersonalidade) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", fkUsuario, fkPersonalidade);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO resultado_teste (fkUsuario, fkPersonalidade) VALUES ('${fkUsuario}', '${fkPersonalidade}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function contarTentativas(fkUsuario) {
    console.log("ACESSEI contarTentativas");

    var instrucaoSql = `
        SELECT count(idResultado) AS total_tentativas
        FROM resultado_teste
        WHERE fkUsuario = ${fkUsuario};
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}


function tentativastotais(fkUsuario) {
    const instrucao = `
        SELECT COUNT(*) AS tentativastotais
        FROM resultado_teste    
        WHERE fkUsuario = ${fkUsuario};
    `;
    return database.executar(instrucao);
}

function personalidadeAtual(fkUsuario) {
    const instrucao = `
        SELECT fkPersonalidade AS personalidade
        FROM resultado_teste
        WHERE fkUsuario = ${fkUsuario}
        ORDER BY idResultado DESC
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

function personalidadePredominante() {
    const instrucao = `
        SELECT fkPersonalidade AS personalidade, COUNT(*) AS qtd
        FROM resultado_teste
        GROUP BY fkPersonalidade
        ORDER BY qtd DESC
        LIMIT 1;
    `;
    return database.executar(instrucao);
}

function dadosgraficos(fkUsuario) {
    const instrucao = `
        SELECT 
            SUM(CASE WHEN fkPersonalidade = 1 THEN 1 ELSE 0 END) AS romantico,
            SUM(CASE WHEN fkPersonalidade = 2 THEN 1 ELSE 0 END) AS criativo,
            SUM(CASE WHEN fkPersonalidade = 3 THEN 1 ELSE 0 END) AS aventureiro,
            SUM(CASE WHEN fkPersonalidade = 4 THEN 1 ELSE 0 END) AS fashionista
        FROM resultado_teste
        WHERE fkUsuario = ${fkUsuario};
    `;
    return database.executar(instrucao);
}


module.exports = {
    autenticar,
    cadastrar,
    cadastrarPersonalidade, // função de INSERT
    tentativastotais,       // função de COUNT
    contarTentativas,       // nova função renomeada
    personalidadeAtual,
    personalidadePredominante,
    dadosgraficos
};
