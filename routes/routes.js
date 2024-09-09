const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuario'); 
const AmbientesController = require('../controllers/Ambientes');
const reserva_ambienteController = require('../controllers/reserva_ambiente');
const Tipo_UsuarioController = require('../controllers/Tipo_usuario');
const Participantes_agendamentoController =  require('../controllers/participantes_agendamento');
const Avaliacao_ambienteController = require('../controllers/avaliacao_ambiente');
const FavoritosController =  require('../controllers/favoritos');


//const PedidosController =  require('../controllers/pedidos');

// definição das rotas
router.get('/favoritos', FavoritosController.listarFavoritos); 
router.post('/favoritos', FavoritosController.cadastrarFavoritos); 
router.patch('/favoritos', FavoritosController.editarFavoritos); 
router.delete('/favoritos', FavoritosController.apagarFavoritos); 

router.get('/usuario', UsuariosController.listarUsuario); 
router.post('/usuario', UsuariosController.cadastrarUsuario); 
router.patch('/usuario', UsuariosController.editarUsuario); 
router.delete('/usuario', UsuariosController.apagarUsuario); 

router.get('/participantes_agendamento', Participantes_agendamentoController.listarParticipantes_agendamento); 
router.post('/participantes_agendamento', Participantes_agendamentoController.cadastrarParticipantes_agendamento); 
router.patch('/participantes_agendamento', Participantes_agendamentoController.editarParticipantes_agendamento); 
router.delete('/participantes_agendamento', Participantes_agendamentoController.apagarParticipantes_agendamento); 

router.get('/avaliacao_ambiente', Avaliacao_ambienteController.listarAvaliacao_ambiente); 
router.post('/avaliacao_ambiente', Avaliacao_ambienteController.cadastrarAvaliacao_ambiente); 
router.patch('/avaliacao_ambiente', Avaliacao_ambienteController.editarAvaliacao_ambiente); 
router.delete('/avaliacao_ambiente', Avaliacao_ambienteController.apagarAvaliacao_ambiente); 



router.get('/Ambientes', AmbientesController.listarAmbientes);
router.post('/Ambientes', AmbientesController.cadastrarAmbientes);
router.patch('/Ambientes', AmbientesController.editarAmbientes);
router.delete('/Ambientes', AmbientesController.apagarAmbientes);

router.get('/reserva_ambiente', reserva_ambienteController.listarReserva_ambiente);
router.post('/reserva_ambiente', reserva_ambienteController.cadastrarReserva_ambiente);
router.patch('/reserva_ambiente', reserva_ambienteController.editarReserva_ambiente);
router.delete('/reserva_ambiente', reserva_ambienteController.apagarReserva_ambiente);

router.get('/Tipo_Usuario', Tipo_UsuarioController.listarTipo_Usuario);
router.post('/Tipo_Usuario', Tipo_UsuarioController.cadastrarTipo_Usuario);
router.patch('/Tipo_Usuario', Tipo_UsuarioController.editarTipo_Usuario);
router.delete('/Tipo_Usuario', Tipo_UsuarioController.apagarTipo_Usuario);


module.exports = router;