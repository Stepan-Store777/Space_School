-- SELECT COM TODOS OS CAMPOS
SELECT id_usu, nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_bloq_usu FROM Usuario;
SELECT id_Tipo_Usu, descricao, FROM Tipo_Usuario;
SELECT id_ambiente, nome_ambiente, descricao_ambiente FROM Ambientes; 
SELECT id_rsvamb, data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, participantes_rsvamb, id_mot_amb FROM reserva_ambiente; 
SELECT id_mot_amb, descri_mot FROM motivo_amb; 


-- DROP DE TODAS AS TABELAS NA ORDEM DE EXCLUSÃO
DROP TABLE Usuario;
DROP TABLE Tipo_Usuario;
DROP TABLE Ambientes;
DROP TABLE reserva_ambiente; 
DROP TABLE motivo_amb; 


-- DESCRIBE DE TODAS AS TABELAS
DESCRIBE Usuario;
DESCRIBE Tipo_Usuario;
DESCRIBE Ambientes;
DESCRIBE reserva_ambiente;
DESCRIBE motivo_amb;


-- INSTRUÇÃO PARA APAGAR OS REGISTROS
DELETE FROM pedido_produtos;
DELETE FROM endereco_clientes;
DELETE FROM clientes;
DELETE FROM usuarios;

-- RESETAR AUTO INCREMENTO - APENAS DAS TABELAS QUE TEM A CHAVE PRIMÁRIA COMO AUTOINCREMENTO
ALTER TABLE usuarios AUTO_INCREMENT = 1;