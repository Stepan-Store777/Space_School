const db = require('../database/connection'); 

/*
listar    = SELECT
cadastrar = INSERT
editar    = UPDATE
apagar    = DELETE
*/

module.exports = {
    async listarReserva_ambiente(request, response) {
        try {           
            
            const sql = `SELECT  data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_ambiente, id_usu, motivo_amb FROM reserva_ambiente;`;
            
            const reserva_ambiente = await db.query(sql);

            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Lista de usuários.', 
                dados: reserva_ambiente[0]
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async cadastrarReserva_ambiente(request, response) {
        try {      
            const { data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, motivo_amb} = request.body;
            const sql = `INSERT INTO reserva_ambiente (data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, motivo_amb)  
                            VALUES (?, ?, ?, ?, ?, ?)`;
            const values = [data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, motivo_amb];
            const execSql = await db.query(sql, values);
            
            const id_rsvamb = execSql[0].insertId;
            
            return response.status(200).json({
                sucesso: true, 
                mensagem: 'Você reservou um ambiente.', 
                dados: id_rsvamb
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na requisição.',
                dados: error.message
            });
        }
    }, 
    async editarReserva_ambiente(request, response) {
        try {   
            
            const sql = `UPDATE  data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, motivo_amb FROM reserva_ambiente;`;
            
            const reserva_ambiente = await db.query(sql);

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
    async apagarReserva_ambiente(request, response) {
        try {     
            
            const sql = `DELETE  data_rsvamb, hr_inicial_rsvamb, hr_final_rsvamb, id_usu, id_ambiente, motivo_amb FROM reserva_ambiente;`;
            
            const reserva_ambiente = await db.query(sql);

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