const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;
require('./database/index.js');
// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Endpoints
app.get('/', (req, res) => res.json('Bienvenido!'));

//CRUD Películas
app.post('/', (req, res) => {
  const {body} = req;
  //1. Crear un registro de 'Película' a partir del body
  //2. Recibir la respuesta de la creación, con el ID asignado a la película
  //3. Responder al cliente con la respues

  const newMovie = '';
  res.status(200).json(newMovie);
})


//Encender el servidor (esto siempre va al final)
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
