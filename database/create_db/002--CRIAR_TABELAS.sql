use bd_tcc_etim_122_g2;

CREATE TABLE Tipo_Usuario (
    id_Tipo_Usu INTEGER PRIMARY KEY,
    descricao VARCHAR(255) NOT NULL
);

CREATE TABLE Usuario (
    id_usu INTEGER PRIMARY KEY,
    nome_usu VARCHAR(255) NOT NULL,
    email_usu VARCHAR(255) NOT NULL,
    senha_usu VARCHAR(255) NOT NULL,
    id_Tipo_Usu INTEGER,
    bloqueado_usu BIT NOT NULL,
    data_cad_usu DATE,
    data_blog_usu DATE,
    FOREIGN KEY (id_Tipo_Usu) REFERENCES Tipo_Usuario(id_Tipo_Usu)
);

CREATE TABLE Ambientes (
    id_ambiente INTEGER PRIMARY KEY,
    nome_ambiente VARCHAR(255) NOT NULL,
    descricao_ambiente VARCHAR(255)
);

CREATE TABLE reserva_ambiente (
    id_rsvamb INTEGER PRIMARY KEY,
    data_rsvamb DATE NOT NULL,
    hr_inicial_rsvamb TIME NOT NULL,
    hr_final_rsvamb TIME NOT NULL,
    id_usu INTEGER,
    id_ambiente INTEGER,
    participantes_rsvamb VARCHAR(255),
    motivo_amb VARCHAR(255),
    FOREIGN KEY (id_usu) REFERENCES Usuario(id_usu),
    FOREIGN KEY (id_ambiente) REFERENCES Ambientes(id_ambiente)
);

CREATE TABLE participantes_agendamento (
    id_part_agend INTEGER PRIMARY KEY,
    id_rsvamb INTEGER,
    nome_participante VARCHAR(255),
    FOREIGN KEY (id_rsvamb) REFERENCES reserva_ambiente(id_rsvamb)
);

CREATE TABLE avaliacao_ambiente (
    id_avaliacao INTEGER PRIMARY KEY,
    id_ambiente INTEGER,
    id_usu INTEGER,
    nota_avaliacao INTEGER NOT NULL,
    FOREIGN KEY (id_ambiente) REFERENCES Ambientes(id_ambiente),
    FOREIGN KEY (id_usu) REFERENCES Usuario(id_usu)
);

CREATE TABLE favoritos (
    id_favorito INTEGER PRIMARY KEY,
    id_usu INTEGER,
    id_ambiente INTEGER,
    FOREIGN KEY (id_usu) REFERENCES Usuario(id_usu),
    FOREIGN KEY (id_ambiente) REFERENCES Ambientes(id_ambiente)
);