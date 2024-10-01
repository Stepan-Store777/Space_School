const db = require('../database/connection'); 

/*
listar    = SELECT
cadastrar = INSERT
editar    = UPDATE
apagar    = DELETE
*/

module.exports = {
    async listarUsuario(request, response) {
        try {   
            
            const sql = `SELECT id_usu, nome_usu, email_usu, 
            senha_usu, id_Tipo_Usu, bloqueado_usu,
            data_cad_usu, data_blog_usu
            FROM Usuario`;
            
            const usuario = await db.query(sql);
           
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: usuario [0]
                
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarUsuario(request, response) {
        try {    
            
            const sql = `INSERT id_usu, nome_usu, email_usu, 
            senha_usu, id_Tipo_Usu, bloqueado_usu, 
            data_cad_usu, data_blog_usu
            FROM Usuario;`
            
            const usuario = await db.query(sql);

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
    async editarUsuario(request, response) {
        try {            

            const sql = `UPDATE id_usu, nome_usu, email_usu, 
            senha_usu, id_Tipo_Usu, bloqueado_usu, 
            data_cad_usu, data_blog_usu
            FROM Usuario;`
            
            const usuario = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Editar usuário.', 
                dados: usuario
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async apagarUsuario(request, response) {
        try {            

            const sql = `DELETE id_usu, nome_usu, email_usu, 
            senha_usu, id_Tipo_Usu, bloqueado_usu, 
            data_cad_usu, data_blog_usu
            FROM Usuario`;
            
            const usuario = await db.query(sql);

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