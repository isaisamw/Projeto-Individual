var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.get(`/tentativastotais/:fkUsuario`, function (req, res) {
    usuarioController.tentativastotais(req, res);
})