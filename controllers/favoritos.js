const db = require('../database/connection'); 

/*
listar    = SELECT
cadastrar = INSERT
editar    = UPDATE
apagar    = DELETE
*/

module.exports = {
    async listarFavoritos(request, response) {
        try {            

            const sql = `SELECT id_favorito, id_usu, id_ambiente FROM favoritos;`
            
            const favorito = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: favorito
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarFavoritos(request, response) {
        try {  
            
            const sql = `INSERT id_favorito, id_usu, id_ambiente FROM favoritos;`
            
            const favorito = await db.query(sql);


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de usuário.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async editarFavoritos(request, response) {
        try {     
            
            const sql = `UPDATE id_favorito, id_usu, id_ambiente FROM favoritos;`
            
            const favorito = await db.query(sql);


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar usuário.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async apagarFavoritos(request, response) {
        try {     
            
            const sql = `DELETE id_favorito, id_usu, id_ambiente FROM favoritos;`
            
            const favorito = await db.query(sql);


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Apagar usuário.', 
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
};