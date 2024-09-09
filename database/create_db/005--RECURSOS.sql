
DROP TABLE Tipo_Usuario; 

DROP TABLE Usuario; 

DROP TABLE Ambientes;

DROP TABLE reserva_ambiente; 

DROP TABLE avaliacao_ambiente;

DROP TABLE favoritos;

DROP TABLE participantes_agendamento;



SELECT * FROM Tipo_Usuario;

SELECT * FROM Usuario;

SELECT * FROM Ambientes;

SELECT * FROM reserva_ambiente;

SELECT * FROM avaliacao_ambiente;

SELECT * FROM favoritos;

SELECT * FROM participantes_agendamento;


describe Tipo_Usuario;

describe Usuario;

describe Ambientes;

describe reserva_ambiente;

describe avaliacao_ambiente;

describe favoritos; 


-- RESETAR AUTO INCREMENTO - APENAS DAS TABELAS QUE TEM A CHAVE PRIMÁRIA COMO AUTOINCREMENTO
ALTER TABLE usuarios AUTO_INCREMENT = 1;