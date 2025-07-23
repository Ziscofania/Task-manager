const express = require('express');
const router = express.Router();
const taskController = require('../controllers/taskController');
const authMiddleware = require('../middleware/authMiddleware');

router.use(authMiddleware); // proteger todas las rutas

router.post('/', taskController.createTask);       // Crear tarea
router.get('/', taskController.getTasks);          // Ver todas
router.get('/:id', taskController.getTaskById);    // Ver una
router.put('/:id', taskController.updateTask);     // Actualizar
router.delete('/:id', taskController.deleteTask);  // Eliminar

module.exports = router;
