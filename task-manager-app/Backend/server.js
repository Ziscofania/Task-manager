const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const cors = require("cors");

dotenv.config(); // Cargar variables de entorno
connectDB();     // Conectar a MongoDB

const app = express();

// Middlewares
app.use(cors());
app.use(express.json());

// Ruta de prueba
app.get("/", (req, res) => {
  res.send("✅ API Task Manager funcionando...");
});

// Iniciar servidor
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`🚀 Servidor backend corriendo en http://localhost:${PORT}`);
});
// Agrega debajo de otros imports
const authRoutes = require("./routes/authRoutes");

// Usa las rutas
app.use("/api/auth", authRoutes);
const taskRoutes = require('./routes/taskRoutes');
app.use('/api/tasks', taskRoutes);
