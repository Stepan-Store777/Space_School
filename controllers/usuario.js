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
            senha_usu, id_Tipo_Usu, bloqueado_usu = 1 AS bloqueado_usu,
            data_cad_usu, data_blog_usu
            FROM Usuario`;
            
            const usuario = await db.query(sql);

            const nItens = usuario[0].length;
           
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: usuario [0],
                nItens
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
            
            const  { id_usu, nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_blog_usu } = request.body;
            const sql = `INSERT INTO usuario 
            (id_usu, nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_blog_usu)
            VALUES ( ?, ? , ? , ? ,?, ?, ?, ? )`;
            const values = [id_usu, nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_blog_usu];
            const execSql = await db.query(sql, values);

            const usu_id = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true,  
                mensagem: 'Cadastro de usuário efetuado com sucesso.', 
                dados: usuario
                //mensSql: execSql
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