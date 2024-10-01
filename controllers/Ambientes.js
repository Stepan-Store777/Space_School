const db = require('../database/connection'); 

/*
listar    = SELECT
cadastrar = INSERT
editar    = UPDATE
apagar    = DELETE
*/

module.exports = {
    async listarAmbientes(request, response) {
        try {      
            
            const sql = `SELECT id_ambiente, nome_ambiente, descricao_ambiente FROM Ambientes;`
            
            const Ambiente = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: Ambiente
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarAmbientes(request, response) {
        try {            

            const sql = `SELECT id_ambiente, nome_ambiente, descricao_ambiente FROM Ambientes;`
            
            const Ambiente = await db.query(sql);

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
    async editarAmbientes(request, response) {
        try {     
            
            const sql = `SELECT id_ambiente, nome_ambiente, descricao_ambiente FROM Ambientes;`
            
            const Ambiente = await db.query(sql);

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
    async apagarAmbientes(request, response) {
        try {    
            
            const sql = `SELECT id_ambiente, nome_ambiente, descricao_ambiente FROM Ambientes;`
            
            const Ambiente = await db.query(sql);

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