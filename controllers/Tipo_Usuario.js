const db = require('../database/connection'); 

/*
listar    = SELECT
cadastrar = INSERT
editar    = UPDATE
apagar    = DELETE
*/

module.exports = {
    async listarTipo_Usuario(request, response) {
        try {       
            
            const sql = `SELECT id_Tipo_Usu, descricao FROM Tipo_Usuario;`;
            
            const Tipo_Usuario = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: Tipo_Usuario
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarTipo_Usuario(request, response) {
        try {   
            
            const sql = `INSERT id_Tipo_Usu, descricao FROM Tipo_Usuario;`;
            
            const Tipo_Usuario = await db.query(sql);

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
    async editarTipo_Usuario(request, response) {
        try {       
            
            const sql = `UPDATE id_Tipo_Usu, descricao FROM Tipo_Usuario;`;
            
            const Tipo_Usuario = await db.query(sql);

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
    async apagarTipo_Usuario(request, response) {
        try {     
            
            const sql = `DELETE id_Tipo_Usu, descricao FROM Tipo_Usuario;`;
            
            const Tipo_Usuario = await db.query(sql);

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