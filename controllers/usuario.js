const db = require('../database/connection');


module.exports = {
    async listarUsuario(request, response) {
        try{ 
            return response.status(200).json({
                sucesso: true,
                mensagem:  'Lista de Usuario.',
                dados: null
            });
        } catch (error) {
            return response.status(500).json({
                sucesso: false,
                mensagem: 'Erro na aquisição. ',
                dados: error.message
            });
        }
    }
}