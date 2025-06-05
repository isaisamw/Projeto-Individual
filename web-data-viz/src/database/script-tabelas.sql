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
  PRIMARY KEY (idResultado, fkUsuario, fkPersonalidade),
  FOREIGN KEY (fkUsuario) REFERENCES usuario(idUsuario),
  FOREIGN KEY (fkPersonalidade) REFERENCES personalidade(idPersonalidade)
);

INSERT INTO personalidade VALUES
(default, 'Romantico','Você é puro coração! Como o Justin em suas fases mais apaixonadas, você valoriza a conexão profunda, os gestos carinhosos e a beleza dos sentimentos. Seu mundo é mais colorido com o amor e a emoção. Você acredita em contos de fadas e busca a alma gêmea em tudo que faz.' ),
(default, 'Criativo', 'Assim como o Justin que se reinventa na música e na arte, você é uma mente inovadora! Adora explorar novas ideias, expressar sua originalidade e vê o mundo com uma perspectiva única. Seu lado criativo é sua maior força, e você está sempre buscando maneiras de transformar o comum em extraordinário.'),
(default, 'Aventureiro', 'Você tem a alma livre! Inspirado no Justin que topa qualquer desafio e adora explorar novos lugares, você vive cada momento intensamente. A rotina não te prende, e a próxima aventura é sempre o seu destino. Você busca adrenalina e experiências que te tirem da zona de conforto.'),
(default, 'Divonico', 'Você arrasa no estilo, assim como o Justin com seus looks babadeiros! A moda é sua forma de expressão, você está sempre por dentro das tendências e adora montar produções que refletem sua personalidade. Você é um ícone de estilo e influencia todos ao seu redor com seu bom gosto.');