const express = require('express');
const router = express.Router();

const UsuarioController = require('../controllers/usuario');
const AmbientesController = require('../controllers/Ambientes');
const motivo_ambController = require('../controllers/motivo_amb');
const reserva_ambienteController = require('../controllers/reserva_ambiente');
const Tipo_UsuarioController = require('../controllers/Tipo_usuario');


router.get('/usuario', UsuarioController.listarUsuario);
router.post('/usuario', UsuarioController.cadastrarUsuario);
router.patch('/usuario', UsuarioController.editarUsuario);
router.delete('/usuario', UsuarioController.apagarUsuario);


router.get('/Ambientes', AmbientesController.listarAmbientes);
router.post('/Ambientes', AmbientesController.cadastrarAmbientes);
router.patch('/Ambientes', AmbientesController.editarAmbientes);
router.delete('/Ambientes', AmbientesController.apagarAmbientes);

router.get('/motivo_amb', motivo_ambController.listarmotivo_amb);
router.post('/motivo_amb', motivo_ambController.cadastrarmotivo_amb);
router.patch('/motivo_amb', motivo_ambController.editarmotivo_amb);
router.delete('/motivo_amb', motivo_ambController.apagarmotivo_amb);

router.get('/reserva_ambiente', reserva_ambienteController.listarreserva_ambiente);
router.post('/reserva_ambiente', reserva_ambienteController.cadastrarreserva_ambiente);
router.patch('/reserva_ambiente', reserva_ambienteController.editarreserva_ambiente);
router.delete('/reserva_ambiente', reserva_ambienteController.apagarreserva_ambiente);

router.get('/Tipo_Usuario', Tipo_UsuarioController.listarTipo_Usuario);
router.post('/Tipo_Usuario', Tipo_UsuarioController.cadastrarTipo_Usuario);
router.patch('/Tipo_Usuario', Tipo_UsuarioController.editarTipo_Usuario);
router.delete('/Tipo_Usuario', Tipo_UsuarioController.apagarTipo_Usuario);



module.exports = router;