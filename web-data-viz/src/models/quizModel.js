var database = require("../database/config");

function cadastrar(idUsuario, idPersonalidade) {
    var instrucao = `
        INSERT INTO resultado_teste (fkUsuario, fkPersonalidade) 
        VALUES (${idUsuario}, ${idPersonalidade});
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}

/*function listar() {
    var instrucao = `
        SELECT * FROM resultadoQuiz;
    `;
    console.log("Executando SQL: \n" + instrucao);
    return database.executar(instrucao);
}*/

module.exports = {
    cadastrar,
    // listar
};
