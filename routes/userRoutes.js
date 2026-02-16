const express = require('express');
const router = express.Router();
const userController = require('../controllers/userControllers');
const { verificarToken } = require('../middlewares/authMiddleware');

router.post('/users', verificarToken, userController.create);
router.get('/users', verificarToken, userController.findAll);
router.get('/users/:id', verificarToken, userController.findById);
router.put('/users/:id', verificarToken, userController.update);
router.delete('/users/:id', verificarToken, userController.delete);

module.exports = router;