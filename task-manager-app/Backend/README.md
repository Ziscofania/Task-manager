# 📦 Backend - Task Manager API

Este es el backend de **Task Manager**, una API REST construida con **Node.js**, **Express** y **MongoDB**. Permite la autenticación de usuarios y operaciones CRUD sobre tareas.

## Tecnologías

- Node.js
- Express.js
- MongoDB (Mongoose)
- JWT (JSON Web Tokens)
- bcrypt.js
- dotenv

---

## 🛠️ Instalación y configuración

### 1. Clonar el repositorio

```bash
git clone https://github.com/Ziscofania/Task-manager.git
```
```bash
cd task-manager/Backend
```
2. Instalar dependencias
```bash
npm install
```
3. Crear archivo .env

Crea un archivo .env en la raíz del backend con las siguientes variables:
```bash
PORT=4000
MONGO_URI=mongodb://localhost:27017/taskmanager
JWT_SECRET=una_clave_secreta_segura
```
    🔐 Asegúrate de no subir este archivo a GitHub.

📂 Estructura de carpetas
```bash
Backend/
│
├── config/            # Configuración de la base de datos
├── controllers/       # Controladores para auth y tareas
├── middleware/        # Middleware (verificación de JWT)
├── models/            # Modelos de Mongoose (User, Task)
├── routes/            # Rutas (auth y tareas)
├── server.js          # Punto de entrada del servidor
└── .env               # Variables de entorno (no se sube)
```
Cómo iniciar el servidor
```bash
npm run dev
```
    Esto corre el servidor en http://localhost:4000

Rutas protegidas

Las rutas de tareas están protegidas por JWT. Para acceder a ellas debes:

    Registrarte o iniciar sesión (/api/auth/register o /api/auth/login)

    Copiar el token que te devuelve el login.

    Enviar el token como Authorization: Bearer TOKEN en las rutas de tareas.

Endpoints disponibles
Auth

    POST /api/auth/register

    POST /api/auth/login

    GET /api/auth/profile

Tareas

    GET /api/tasks

    POST /api/tasks

    PUT /api/tasks/:id

    DELETE /api/tasks/:id

Probar con Postman

Puedes usar Postman para probar los endpoints. No olvides enviar el token para acceder a las tareas.