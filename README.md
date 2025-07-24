# 📋 Task Manager

**Task Manager** es una aplicación web que permite a los usuarios gestionar sus tareas de forma eficiente mediante una interfaz tipo **dashboard**. Incluye autenticación, calendario interactivo y funcionalidades CRUD sobre tareas.

---

## Características principales

✅ Registro e inicio de sesión de usuarios  
✅ Crear, editar y eliminar tareas  
✅ Visualización de tareas en formato calendario  
✅ Interfaz moderna con diseño responsivo  
✅ Backend seguro con JWT y MongoDB  

---

##  Tecnologías utilizadas

###  Backend
- Node.js + Express.js
- MongoDB + Mongoose
- JWT para autenticación
- bcrypt.js para hashing

###  Frontend
- HTML5, CSS3 (grid/flexbox)
- Vanilla JavaScript
- Diseño limpio con paleta blanco crema y azul

---

##  ¿Cómo funciona?

1. El usuario se **registra o inicia sesión**.
2. Una vez autenticado, accede al **Dashboard**, donde puede:
   - Ver su perfil.
   - Agregar nuevas tareas.
   - Consultar tareas en formato calendario.
   - Editar o eliminar tareas existentes.
3. Las tareas se almacenan en MongoDB y se vinculan al usuario mediante un **token JWT**.

---

##  Vistas principales

- **Dashboard**: Muestra las tareas activas y acceso al calendario.
- **Calendario**: Cada día muestra puntos si existen tareas. Al hacer clic, se muestran las tareas del día.
- **Modal**: Para agregar o editar tareas.
- **Sidebar**: Navegación principal y botón de cerrar sesión.

---

##  Estructura del proyecto
```bash
task-manager-app/
│
├── Backend/ # API con Express y MongoDB
├── Frontend/ # HTML, CSS y JS del cliente
│ ├── css/
│ ├── js/
│ └── index.html
├── README.md # Descripción general
└── .gitignore
```

---

## 🚀 Cómo ejecutar el proyecto

### 1. Inicia el backend
```bash
cd Backend
```
```bash
npm install
```
```bash
npm run dev
```
2. Abre el frontend

Abre Frontend/index.html con Live Server o tu navegador.
✅ Estado del proyecto

El proyecto está funcional y completo, con posibilidad de expandirse a futuro:

Notificaciones de tareas vencidas

Filtrado por etiquetas o prioridad

    Interfaz para móviles mejorada

