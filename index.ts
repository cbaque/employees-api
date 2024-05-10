import Server from './classes/server';
import userRoutes from './routes/usuario';

import bodyParser from 'body-parser';

const server = new Server();


// Body parser
server.app.use( bodyParser.urlencoded({ extended: true }));
server.app.use( bodyParser.json() );

// Rutas de mi app
server.app.use('/api', userRoutes );

// Levantar express
server.start( () => {
    console.log(`Servidor corriendo en puerto ${ server.port }`);
});