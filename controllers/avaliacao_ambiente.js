const db = require('../database/connection'); 

/*
listar    = SELECT
cadastrar = INSERT
editar    = UPDATE
apagar    = DELETE
*/

module.exports = {
    async listarAvaliacao_ambiente(request, response) {
        try {      
            
            const sql = `SELECT id_avaliacao, id_ambiente, id_usu, nota_avaliacao FROM avaliacao_ambiente;`
            
            const avaliacao_ambiente = await db.query(sql);


            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: avaliacao_ambiente
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarAvaliacao_ambiente(request, response) {
        try {       
            
            const sql = `SELECT id_avaliacao, id_ambiente, id_usu, nota_avaliacao FROM avaliacao_ambiente;`
            
            const avaliacao_ambiente = await db.query(sql);

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
    async editarAvaliacao_ambiente(request, response) {
        try {    
            
            const sql = `SELECT id_avaliacao, id_ambiente, id_usu, nota_avaliacao FROM avaliacao_ambiente;`
            
            const avaliacao_ambiente = await db.query(sql);

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
    async apagarAvaliacao_ambiente(request, response) {
        try {       
            
            const sql = `SELECT id_avaliacao, id_ambiente, id_usu, nota_avaliacao FROM avaliacao_ambiente;`
            
            const avaliacao_ambiente = await db.query(sql);

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