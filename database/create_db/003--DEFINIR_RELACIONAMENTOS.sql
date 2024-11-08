USE bd_tcc_etim_122_g2;


ALTER TABLE Usuario ADD FOREIGN KEY (id_Tipo_Usu) REFERENCES Tipo_Usuario(id_Tipo_Usu);

ALTER TABLE reserva_ambiente ADD FOREIGN KEY (id_usu) REFERENCES Usuario(id_usu);

ALTER TABLE reserva_ambiente ADD FOREIGN KEY (id_ambiente) REFERENCES Ambientes(id_ambiente);
