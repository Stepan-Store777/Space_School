
DROP TABLE Tipo_Usuario; 

DROP TABLE Usuario; 

DROP TABLE Ambientes;

DROP TABLE reserva_ambiente; 

DROP TABLE avaliacao_ambiente;

DROP TABLE favoritos;

DROP TABLE participantes_agendamento;



SELECT id_Tipo_Usu, descricao FROM Tipo_Usuario;

SELECT id_usu, nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_blog_usu FROM Usuario;

SELECT id_ambiente, nome_ambiente, descricao_ambiente FROM Ambientes;

SELECT id_rsvamb, data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, participantes_rsvamb, motivo_amb FROM reserva_ambiente;

SELECT id_part_agend, id_rsvamb, nome_participante FROM participantes_agendamento;

SELECT id_avaliacao, id_ambiente, id_usu, nota_avaliacao FROM avaliacao_ambiente;

SELECT id_favorito, id_usu, id_ambiente FROM favoritos;




describe Tipo_Usuario;

describe Usuario;

describe Ambientes;

describe reserva_ambiente;

describe avaliacao_ambiente;

describe favoritos; 


-- RESETAR AUTO INCREMENTO - APENAS DAS TABELAS QUE TEM A CHAVE PRIMÁRIA COMO AUTOINCREMENTO
ALTER TABLE usuarios AUTO_INCREMENT = 1;