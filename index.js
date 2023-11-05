const http = require('http');

// Recupero la APP de Express para gestionar la entrada y salida de peticiones
const app = require('./src/app');

// Leo el fichero de entorno
require('dotenv').config();

// Configuro la base de datos
require('./src/config/db');

// Creo el servidor
const server = http.createServer(app);

const PORT = process.env.PORT ?? 3000;
server.listen(PORT);

// Cuando se quede en escucha, le pido que me avise en qué puerto se conecta y en caso de error que me informe del error
server.on('listening', () => {
  console.log(`Servidor escuchando en puerto ${PORT}`);
});

server.on('error', (error) => console.log(error));