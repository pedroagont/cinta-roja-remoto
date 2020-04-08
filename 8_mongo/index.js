const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;
// require('./database/index.js');
require('./database/');
const Movies = require('./models/Movies');

// Middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Endpoints
app.get('/', (req, res) => res.json('¡Bienvenido!'));

//CRUD Películas
//CREATE
app.post('/api/v1/movies', (req, res) => {
  const { body } = req;

  //4. Verificamos que el body contenga por lo menos un actor
  if (!body.actors || body.actors.length === 0) {
    res.status(400).json({
      message: "at least one actor is required"
    });
  }

  //1. Crear un registro de 'Película' a partir del body
  Movies.create(body)
  //2. Recibir la respuesta de la creación, con el ID asignado a la película
  //3. Responder al cliente con la respuesta
    .then(newMovie => res.status(201).json(newMovie))
    .catch(err => {
      res.status(400).json(err)
    });
});

//READ ALL
app.get('/api/v1/movies', (req, res) => {
  // Obtener peliculas de la base de datos
  Movies.find()
    .then(movies => res.json(movies))
    .catch(err => res.status(400).json(err));
});

//READ ONE
app.get('/api/v1/movies/:id', (req, res) => {
  // Obtener ID desde params
  const { id } = req.params;
  // Obtener pelicula por ID de la base de datos
  Movies.findById(id)
    .then(movie => res.json(movie))
    .catch(err => res.status(404).json(err));
});

//UPDATE
app.patch('/api/v1/movies/:id', (req, res) => {
  const { body } = req;
  // Obtener ID desde params
  const { id } = req.params;
  // Encontrar película por ID y actualizar a partir del body que me manda el cliente
  Movies.findByIdAndUpdate(id, body, { new: true })
    .then(updatedMovie => res.json(updatedMovie))
    .catch(err => res.status(404).json(err));
});

//DELETE
app.delete('/api/v1/movies/:id', (req, res) => {
  // Obtener ID desde params
  const { id } = req.params;
  // Encontrar y borrar pelicula por ID
  // Encontrar y actualizar pelicula por ID a partir del Body que me manda el cliente
  Movies.findByIdAndDelete(id)
  .then(() => res.status(204).json())
  .catch(err => res.status(404).json(err));
});


//Encender el servidor (esto siempre va al final)
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
