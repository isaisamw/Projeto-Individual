var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/cadastrarPersonalidade", function (req, res) {
    usuarioController.cadastrarPersonalidade(req, res);
});

router.get("/tentativastotais/:fkUsuario", function (req, res) {
    usuarioController.tentativastotais(req, res);
});

router.get("/personalidadeAtual/:fkUsuario", function (req, res) {
    usuarioController.personalidadeAtual(req, res);
});

router.get("/personalidadePredominante", function (req, res) {
    usuarioController.personalidadePredominante(req, res);
});

router.get("/dadosgraficos/:fkUsuario", function (req, res) {
    usuarioController.dadosgraficos(req, res);
});


module.exports = router;