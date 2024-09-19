const express = require('express');
const dbConnection = require('./config/config');
const tiqueteRoutes = require('./Routes/tiqueteRoutes');
const dotenv = require('dotenv');
dotenv.config();

const app = express();

// Conexión a la base de datos
dbConnection();

// Middlewares
app.use(express.json());

// Rutas
app.use('/api/tiquetes', tiqueteRoutes);

module.exports = app;