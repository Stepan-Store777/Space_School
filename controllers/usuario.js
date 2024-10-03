const db = require('../database/connection'); 

module.exports = {
    async listarUsuario(request, response) {
        try {   
            const sql = `SELECT id_usu, nome_usu, email_usu, 
                        senha_usu, id_Tipo_Usu, 1 AS bloqueado_usu,
                        data_cad_usu, data_blog_usu
                        FROM Usuario`;
            
            const usuario = await db.query(sql);
            const nItens = usuario[0].length;
           
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: usuario[0],
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
            const { nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_blog_usu } = request.body;
            const sql = `INSERT INTO usuario 
                         (nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_blog_usu)
                         VALUES (?, ?, ?, ?, ?, ?, ?)`;
            const values = [nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_blog_usu];
            const execSql = await db.query(sql, values);

            const id_usu = execSql[0].insertId;

            return response.status(200).json({
                sucesso: true,  
                mensagem: 'Cadastro de usuário efetuado com sucesso.', 
                dados: id_usu
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
            const { nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_blog_usu } = request.body;
            const {id_usu} = request.params;
            const sql = `UPDATE Usuario
                         SET nome_usu = ?, email_usu = ?, senha_usu = ?, id_Tipo_Usu = ?, bloqueado_usu = ?, data_cad_usu = ?, data_blog_usu = ?
                         WHERE id_usu = ?`;
            const values = [nome_usu, email_usu, senha_usu, id_Tipo_Usu, bloqueado_usu, data_cad_usu, data_blog_usu, id_usu];
            const atualizarDados = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: `Usuário ${id_usu} editado com sucesso!`, 
                dados: atualizarDados[0].affectedRows
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
            const { id_usu } = request.params;

            const sql = `DELETE FROM Usuario WHERE id_usu = ?`;

            const values = [id_usu];

            const excluir = await db.query(sql, values);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Usuário ${id_usu} apagado com sucesso.', 
                dados: excluir[0].affectedRows
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
