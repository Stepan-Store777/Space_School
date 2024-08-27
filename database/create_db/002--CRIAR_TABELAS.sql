use bd_tcc_etim_122_g2;

CREATE TABLE  `Usuario` (
	`id_usu` int AUTO_INCREMENT NOT NULL,
	`nome_usu` varchar(60) NOT NULL,
	`email_usu` varchar(100) NOT NULL,
	`senha_usu` varchar(20) NOT NULL,
	`id_Tipo_Usu` int NOT NULL,
	`bloqueado_usu` bit(1),
	`data_cad_usu` date NOT NULL,
	`data_bloq_usu` date NULL,
	PRIMARY KEY (`id_usu`)
);


CREATE TABLE `Tipo_Usuario` (
	`id_Tipo_Usu` int AUTO_INCREMENT NOT NULL,
	`descricao` varchar(20) NOT NULL,
	PRIMARY KEY (`id_Tipo_Usu`)
);


CREATE TABLE  `Ambientes` (
	`id_ambiente` int AUTO_INCREMENT NOT NULL,
	`nome_ambiente` varchar(20) NOT NULL,
	`descricao_ambiente` varchar(128) NOT NULL,
	PRIMARY KEY (`id_ambiente`)
);


CREATE TABLE `reserva_ambiente` (
  `id_rsvamb` int(11) NOT NULL AUTO_INCREMENT,
  `data_rsvamb` date NOT NULL,
  `hr_inicial_rsvamb` time NOT NULL,
  `hr_final_rsvamb` time NOT NULL,
  `id_usu` int(11) NOT NULL,
  `id_ambiente` int(11) NOT NULL,
  `participantes_rsvamb` varchar(255) NOT NULL,
  `id_mot_amb` int(11) DEFAULT NULL,
  PRIMARY KEY (`id_rsvamb`),
  KEY `id_usu` (`id_usu`),
  KEY `id_ambiente` (`id_ambiente`),
  CONSTRAINT `reserva_ambiente_ibfk_1` FOREIGN KEY (`id_usu`) REFERENCES `usuario` (`id_usu`),
  CONSTRAINT `reserva_ambiente_ibfk_2` FOREIGN KEY (`id_ambiente`) REFERENCES `ambientes` (`id_ambiente`),
  CONSTRAINT `reserva_ambiente_ibfk_3` FOREIGN KEY (`id_ambiente`) REFERENCES `ambientes` (`id_ambiente`)
) ENGINE=InnoDB AUTO_INCREMENT=8 DEFAULT CHARSET=utf8;


CREATE TABLE  `motivo_amb` (
	`id_mot_amb` int AUTO_INCREMENT NOT NULL UNIQUE,
	`descri_mot` varchar(255) NOT NULL,
	PRIMARY KEY (`id_mot_amb`)
);