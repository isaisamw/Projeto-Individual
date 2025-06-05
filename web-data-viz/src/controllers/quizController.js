var quizModel = require("../models/quizModel");

function cadastrar(req, res) {
    var idUsuario  = req.body.idUsuario;
    var idPersonalidade = req.body.idPersonalidade;

    if (!nome || !perfil) {
        res.status(400).send("Nome ou perfil não enviados!");
        return;
    }

    quizModel.cadastrar(nome, perfil).then(function () {
        res.status(200).send("Resposta cadastrada com sucesso!");
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

function listar(req, res) {
    quizModel.listar().then(function (resultados) {
        res.status(200).json(resultados);
    }).catch(function (erro) {
        res.status(500).json(erro.sqlMessage);
    });
}

module.exports = {
    cadastrar,
    listar
};
