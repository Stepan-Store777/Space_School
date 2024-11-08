
INSERT INTO Tipo_Usuario (id_Tipo_Usu, descricao) VALUES 
(1, 'Administrador'),
(2, 'Coordenador'),
(3, 'Aluno');

INSERT INTO Usuario (id_usu, nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_blog_usu) VALUES 
-- (?,            ?,                     ?,          ?, ?, ?,            ?,            ?)
(1, 'João Paulo', 'joaopaulo@email.com', 'senha123', 1, 0, '2024-09-01', '2024-09-05'),  -- Administrador
(2, 'Gabriel Henrique', 'gabrielhenrique@email.com', 'senha123', 2, 0, '2024-09-01', '2024-09-05'),  -- Coordenador
(3, 'Maria Silva', 'maria@email.com', 'senha123', 3, 0, '2024-09-01', '2024-09-05'),  -- Aluna
(4, 'Carlos Sousa', 'carlos@email.com', 'senha123', 3, 0, '2024-09-01', '2024-09-05'),  -- Aluno
(5, 'Ana Costa', 'ana@email.com', 'senha123', 3, 0, '2024-09-01', '2024-09-05'),  -- Aluna
(6, 'Lucas Pereira', 'lucas@email.com', 'senha123', 3, 0, '2024-09-01', '2024-09-05'),  -- Aluno
(7, 'Fernanda Lima', 'fernanda@email.com', 'senha123', 3, 0, '2024-09-01', '2024-09-05');  -- Aluna


INSERT INTO Ambientes (id_ambiente, nome_ambiente, descricao_ambiente, imagem_ambiente) VALUES 
(1, 'Quadra', 'Quadra poliesportiva coberta', 'Quadra.jpg'),
(2, 'LAB1', 'Laboratório de informática 1', 'labNote.jpg'),
(3, 'LAB2', 'Laboratório de informática 2', 'labNote.jpg'),
(4, 'LAB3', 'Laboratório de informática 3', 'labNote.jpg'),
(5, 'LAB4', 'Laboratório de informática 4', 'labNote.jpg'),
(6, 'Sala 7 (Temática)', 'Laboratório adaptado para processos criativos práticos equipado com X computadores (Especificações dos PCs). O ambiente proporciona versatilidade, confortabilidade e estética agradável aos olhos', 'Sala7.jpg'),
(7, 'Laboratório de Pranchetas', 'Laboratório para desenhos', 'LabPranch.jpg'),
(8, 'Audiovisual', 'Sala de Audiovisual', 'SalaAula.jpg'),
(9, 'Biblioteca', 'Biblioteca da instituição', 'Bibli.jpg');


INSERT INTO reserva_ambiente (id_rsvamb, data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, participantes_rsvamb, motivo_amb) VALUES 
(1, '2024-09-05', '08:00:00', '10:00:00', 1, 1, '20', 'Jogo de basquete'),
(2, '2024-09-06', '14:00:00', '16:00:00', 2, 2, '15', 'Aula de programação'),
(3, '2024-09-07', '09:00:00', '11:00:00', 3, 9, '10', 'Sessão de leitura');
INSERT INTO reserva_ambiente (id_rsvamb, data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, participantes_rsvamb, motivo_amb) VALUES 
(4, '2024-09-05', '15:25:00', '16:30:00', 3,1, '15', 'Resenha com os Manos');

INSERT INTO participantes_agendamento (id_part_agend, id_rsvamb, nome_participante) VALUES 
(1, 1, 'Carlos Sousa'),
(2, 1, 'Ana Costa'),
(3, 2, 'Lucas Pereira'),
(4, 3, 'Fernanda Lima');

INSERT INTO avaliacao_ambiente (id_avaliacao, id_ambiente, id_usu, nota_avaliacao) VALUES 
(1, 1, 1, 5),
(2, 2, 2, 4),
(3, 9, 3, 5);

INSERT INTO favoritos (id_favorito, id_usu, id_ambiente) VALUES 
(1, 1, 9),
(2, 2, 2),
(3, 3, 1);