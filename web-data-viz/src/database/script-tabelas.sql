CREATE DATABASE IsBieber;

USE IsBieber;

CREATE TABLE usuario (
	idUsuario INT PRIMARY KEY AUTO_INCREMENT,
	nome VARCHAR(50) not null,
	email VARCHAR(50) not null unique,
	senha VARCHAR(50) not null
  );

CREATE TABLE personalidade (
  idPersonalidade INT PRIMARY KEY AUTO_INCREMENT,
  nome VARCHAR(50),
  descricao varchar (500)
);

CREATE TABLE resultado_teste (
  idResultado INT AUTO_INCREMENT,
  fkUsuario INT,
  fkPersonalidade INT,
  pontuacao INT,
  PRIMARY KEY (idResultado, fkUsuario, fkPersonalidade),
  FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
  FOREIGN KEY (fkPersonalidade) REFERENCES personalidade(idPersonalidade)
);