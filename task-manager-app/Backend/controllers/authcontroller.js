const User = require("../models/User");
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");

const generarToken = (userId) => {
  return jwt.sign({ id: userId }, process.env.JWT_SECRET, {
    expiresIn: "7d"
  });
};

// POST /api/auth/register
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ msg: "Todos los campos son obligatorios" });
    }

    const userExiste = await User.findOne({ email });
    if (userExiste) {
      return res.status(400).json({ msg: "El correo ya está registrado" });
    }

    const newUser = await User.create({ name, email, password });
    const token = generarToken(newUser._id);

    res.status(201).json({
      user: {
        id: newUser._id,
        name: newUser.name,
        email: newUser.email
      },
      token
    });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

// POST /api/auth/login
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.status(400).json({ msg: "Usuario no encontrado" });

    const passwordCorrecta = await bcrypt.compare(password, user.password);
    if (!passwordCorrecta) return res.status(400).json({ msg: "Contraseña incorrecta" });

    const token = generarToken(user._id);

    res.json({
      user: {
        id: user._id,
        name: user.name,
        email: user.email
      },
      token
    });
  } catch (error) {
    res.status(500).json({ msg: "Error en el servidor" });
  }
};

// GET /api/auth/profile
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id).select("-password");
    res.json(user);
  } catch (error) {
    res.status(500).json({ msg: "Error al obtener perfil" });
  }
};

module.exports = {
  registerUser,
  loginUser,
  getProfile
};
