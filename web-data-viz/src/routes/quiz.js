var express = require("express");
var router = express.Router();

// var quizController = require("../controllers/quizController");

// Rota para salvar resposta
router.post("/cadastrar", function (req, res) {
    quizController.cadastrar(req, res);
});

/*Rota para listar resultados
router.get("/listar", function (req, res) {
    quizController.listar(req, res);
});*/

module.exports = router;
