const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());
app.use(express.json());

// Derivo todas las peticiones a la API para que gestione las rutas
app.use('/api', require('./routes/api'));

module.exports = app;