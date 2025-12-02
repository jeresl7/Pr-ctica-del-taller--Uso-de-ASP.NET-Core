// 1. Importar express
const express = require('express');

const app = express();
app.use(express.json());

const PORT = 3000;

// Middleware logger
const logger = (req, res, next) => {
    console.log(`Método: ${req.method} | Ruta: ${req.url}`);
    next();
};
app.use(logger);

// Rutas básicas
app.get('/', (req, res) => {
    res.send("Servidor funcionando CORRECTAMENTE");
});

app.get('/saludo', (req, res) => {
    res.json({
        mensaje: "Hola",
        autor: "Jeremy",
        fecha: new Date()
    });
});

// Mock de datos
const usuarios = [
    { id: 1, nombre: "Miguel", edad: 30 },
    { id: 2, nombre: "Amando", edad: 20 },
    { id: 3, nombre: "Raul", edad: 35 }
];

// GET todos
app.get('/usuarios', (req, res) => {
    res.json({
        total: usuarios.length,
        data: usuarios
    });
});

// GET por id
app.get('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ error: "Usuario no encontrado" });
    }

    res.json(usuario);
});

// Query params
app.get('/buscar', (req, res) => {
    const nombre = req.query.nombre || "";
    const filtrados = usuarios.filter(u =>
        u.nombre.toLowerCase().includes(nombre.toLowerCase())
    );

    res.json(filtrados);
});

// POST agregar usuario
app.post('/usuarios', (req, res) => {
    const { nombre, edad } = req.body;

    if (!nombre || !edad) {
        return res.status(400).json({ error: "Faltan datos" });
    }

    const nuevo = {
        id: usuarios.length + 1,
        nombre,
        edad
    };

    usuarios.push(nuevo);

    res.status(201).json({
        mensaje: "Usuario agregado",
        usuario: nuevo
    });
});

// PUT actualizar usuario
app.put('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const usuario = usuarios.find(u => u.id === id);

    if (!usuario) {
        return res.status(404).json({ error: "No encontrado" });
    }

    usuario.nombre = req.body.nombre || usuario.nombre;
    usuario.edad = req.body.edad || usuario.edad;

    res.json({ mensaje: "Actualizado", usuario });
});

// DELETE usuario
app.delete('/usuarios/:id', (req, res) => {
    const id = Number(req.params.id);
    const index = usuarios.findIndex(u => u.id === id);

    if (index === -1) {
        return res.status(404).json({ error: "No encontrado" });
    }

    usuarios.splice(index, 1);

    res.json({ mensaje: "Eliminado" });
});

// 404 handler
app.use((req, res) => {
    res.status(404).json({ error: "Recurso no encontrado" });
});

// 500 handler
app.use((err, req, res, next) => {
    console.error("ERROR:", err);
    res.status(500).json({
        error: "Error interno del servidor",
        detalles: err.message
    });
});

// Iniciar servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en http://localhost:${PORT}`);
});