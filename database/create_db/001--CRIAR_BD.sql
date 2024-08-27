CREATE DATABASE use bd_tcc_etim_122_g2;; 

SHOW DATABASES; 

USE bd_tcc_etim_122_g2;; 

SELECT DATABASE(); 

-- ALTER SCHEMA bd_aula_node_ewerton RENAME TO bd_aula_node; 

DROP DATABASE  bd_tcc_etim_122_g2;; 

CREATE DATABASE bd_tcc_etim_122_g2;; 

SHOW DATABASES; 

USE bd_tcc_etim_122_g2;;

SELECT DATABASE(); 

CREATE USER 'us_etim_122_g2' IDENTIFIED BY '123456';

GRANT ALL PRIVILEGES ON S223_node.* TO us_aula_node;