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
            const { nome_ambiente, descricao_ambiente } = request.body;
            const PesqNome = nome_ambiente ? `%${nome_ambiente}%` : `%%`;
            const PesqDescricao = descricao_ambiente ? `%${descricao_ambiente}%` : `%%`;
            
            const sql = `SELECT id_ambiente, nome_ambiente, descricao_ambiente 
                         FROM Ambientes
                         WHERE nome_ambiente LIKE ? AND descricao_ambiente LIKE ?;`;
            
            const values = [PesqNome, PesqDescricao];
            const Ambientes = await db.query(sql, values);
            const nItens = Ambientes[0].length;
    
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de ambientes.', 
                dados: Ambientes[0],
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
    
    async cadastrarAmbientes(request, response) {
        try {    
            const { nome_ambiente, descricao_ambiente } = request.body;
            const sql = `INSERT INTO Ambientes (nome_ambiente, descricao_ambiente) 
                         VALUES (?, ?);`;
            const values = [nome_ambiente, descricao_ambiente];
            
            const resultado = await db.query(sql, values);
    
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Cadastro de ambiente efetuado com sucesso.', 
                dados: resultado[0].insertId
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