import express from 'express';
import router from './routes/router.js';
import db from './database/database.js';

const app = express();

// Usando os métodos nativos do Express
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Aplicando as rotas
app.use('/', router);

// Iniciando o servidor
app.listen(3000, () => {
  console.log('Listening to port 3000');
});