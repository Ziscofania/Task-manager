const Task = require('../models/Task');

// Crear nueva tarea
exports.createTask = async (req, res) => {
  try {
    const { title, description } = req.body;
    const task = await Task.create({
      title,
      description,
      user: req.user.id,  // viene del middleware de auth
    });
    res.status(201).json(task);
  } catch (error) {
    res.status(500).json({ msg: 'Error al crear tarea' });
  }
};

// Obtener todas las tareas del usuario
exports.getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({ user: req.user.id });
    res.json(tasks);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener tareas' });
  }
};

// Obtener una sola tarea
exports.getTaskById = async (req, res) => {
  try {
    const task = await Task.findOne({ _id: req.params.id, user: req.user.id });
    if (!task) return res.status(404).json({ msg: 'Tarea no encontrada' });
    res.json(task);
  } catch (error) {
    res.status(500).json({ msg: 'Error al obtener tarea' });
  }
};

// Actualizar tarea
exports.updateTask = async (req, res) => {
  try {
    const updatedTask = await Task.findOneAndUpdate(
      { _id: req.params.id, user: req.user.id },
      req.body,
      { new: true }
    );
    if (!updatedTask) return res.status(404).json({ msg: 'Tarea no encontrada' });
    res.json(updatedTask);
  } catch (error) {
    res.status(500).json({ msg: 'Error al actualizar tarea' });
  }
};

// Eliminar tarea
exports.deleteTask = async (req, res) => {
  try {
    const deleted = await Task.findOneAndDelete({ _id: req.params.id, user: req.user.id });
    if (!deleted) return res.status(404).json({ msg: 'Tarea no encontrada' });
    res.json({ msg: 'Tarea eliminada' });
  } catch (error) {
    res.status(500).json({ msg: 'Error al eliminar tarea' });
  }
};
