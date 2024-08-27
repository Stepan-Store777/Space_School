
-- Inserting data into Tipo_Usuario (User Type) table
INSERT INTO Tipo_Usuario (id_Tipo_Usu, descricao) VALUES
(1,'Administrador'),
(2,'Usuário Padrão');

-- Inserting data into Usuario (User) table
INSERT INTO Usuario (id_usu, nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_bloq_usu) VALUES
(1,'João Silva', 'joao@example.com', 'senha123', 1, 0, '2024-06-14', '2024-06-14');
INSERT INTO Usuario (id_usu, nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_bloq_usu) VALUES
(2,'Maria Oliveira', 'maria@example.com', 'abcd4567', 2, 1, '2024-06-14', '2024-06-14');

-- Inserting data into Ambientes (Environments) table
INSERT INTO Ambientes (id_ambiente, nome_ambiente, descricao_ambiente) VALUES
(1,'Sala de Reuniões', 'Sala de reuniões com capacidade para 10 pessoas.');
INSERT INTO Ambientes (id_ambiente, nome_ambiente, descricao_ambiente) VALUES
(2,'Auditório', 'Espaço amplo para apresentações e eventos.');
INSERT INTO Ambientes (id_ambiente, nome_ambiente, descricao_ambiente) VALUES
(3,'Sala Tematica', 'Espaço para realização de eventos.');
INSERT INTO Ambientes (id_ambiente, nome_ambiente, descricao_ambiente) VALUES
(4,'Quadra', 'Espaço para realização de jogos.');

-- Inserting data into reserva_ambiente (Environment Reservation) table
INSERT INTO reserva_ambiente (id_rsvamb, data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, participantes_rsvamb, id_mot_amb) VALUES
(1, '2024-06-15', '10:00:00', '12:00:00', 1, 1, 'João, Maria', 'Reunião de equipe');
INSERT INTO reserva_ambiente (id_rsvamb, data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, participantes_rsvamb, id_mot_amb) VALUES
(2, '2024-06-20', '14:00:00', '17:00:00', 2, 2, 'Departamento de Marketing', 'Apresentação de projeto');

INSERT INTO motivo_amb (id_mot_amb,descri_mot) VALUES
(1, 'Sala de reuniões com capacidade para 10 pessoas.');
INSERT INTO motivo_amb (id_mot_amb,descri_mot) VALUES
(2, 'Espaço amplo para apresentações e eventos.');
INSERT INTO motivo_amb (id_mot_amb,descri_mot) VALUES
(3, 'Espaço para realização de eventos.');
INSERT INTO motivo_amb (id_mot_amb,descri_mot) VALUES
(4, 'Espaço para realização de jogos.');