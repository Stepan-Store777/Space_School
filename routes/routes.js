const express = require('express'); 
const router = express.Router(); 

// referência a controllers que serão utilizados nas rotas
const UsuariosController = require('../controllers/usuario'); 
const AmbientesController = require('../controllers/Ambientes');
const reserva_ambienteController = require('../controllers/reserva_ambiente');
const Tipo_UsuarioController = require('../controllers/Tipo_usuario');
const motivo_ambController = require('../controllers/motivo_amb');

//const PedidosController =  require('../controllers/pedidos');

// definição das rotas
router.get('/usuario', UsuariosController.listarUsuario); 
router.post('/usuario', UsuariosController.cadastrarUsuario); 
router.patch('/usuario', UsuariosController.editarUsuario); 
router.delete('/usuario', UsuariosController.apagarUsuario); 

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

router.get('/motivo_amb', motivo_ambController.listarMotivo_amb);
router.post('/motivo_amb', motivo_ambController.cadastrarMotivo_amb);
router.patch('/motivo_amb', motivo_ambController.editarMotivo_amb);
router.delete('/motivo_amb', motivo_ambController.apagarMotivo_amb);

module.exports = router;