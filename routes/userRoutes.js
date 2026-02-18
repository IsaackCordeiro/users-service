const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const { verificarToken } = require('../middlewares/authMiddleware');

// Para cadastro segue aberto para o usuário
router.post('/users', userController.create);
// Demais funcionalidades do CRUD apenas com o token JWT devidamente gerado
router.get('/users', verificarToken, userController.findAll);
router.get('/users/:id', verificarToken, userController.findById);
router.put('/users/:id', verificarToken, userController.update);
router.delete('/users/:id', verificarToken, userController.delete);

module.exports = router;