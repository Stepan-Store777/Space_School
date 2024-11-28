const db = require('../database/connection'); 

/*
listar    = SELECT
cadastrar = INSERT
editar    = UPDATE
apagar    = DELETE
*/

module.exports = {
    async listarParticipantes_agendamento(request, response) {
        try {            

            const sql = `SELECT id_part_agend, id_rsvamb, nome_participante, serie_participante FROM participantes_agendamento;`;
            
            const participantes_agendamento = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: participantes_agendamento
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarParticipantes_agendamento(request, response) {
        try {      
            
            const sql = `SELECT id_part_agend, id_rsvamb, nome_participante, serie_participante FROM participantes_agendamento;`;
            
            const participantes_agendamento = await db.query(sql);

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
    async editarParticipantes_agendamento(request, response) {
        try {  
            
            const sql = `SELECT id_part_agend, id_rsvamb, nome_participante, serie_participante FROM participantes_agendamento;`;
            
            const participantes_agendamento = await db.query(sql);

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
    async apagarParticipantes_agendamento(request, response) {
        try {   
            
            const sql = `SELECT id_part_agend, id_rsvamb, nome_participante, serie_participante FROM participantes_agendamento;`;
            
            const participantes_agendamento = await db.query(sql);

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
}