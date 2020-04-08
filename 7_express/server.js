const express = require('express');
const app = express();
const port = 3000;

// Para no tener que cerrar proceso y volver a correrlo en caso de ser modificado
// Usamos nodemon: sudo npm install nodemon --global

// MIDDLEWARES:
app.use(express.json()); // for parsing application/json
app.use(express.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

// ENDPOINTS
app.get('/', (req, res) => res.send('Bienvenido a mi servidor!'));
app.get('/prueba', (req, res) => res.status(203).send({ message: 'This is a test'}));

// ¿Cómo trabajamos con querys?
app.get('/ejemplo', (req, res) => {
  console.log('✅', req.query);
  return res.send(req.query);
});
//INSOMNIA GET localhost:3000/ejemplo?precio=5000-12000&marca=Tohiba&fecha=2020-04-06
// {
//   "precio": "5000-12000",
//   "marca": "Tohiba",
//   "fecha": "2020-04-06"
// }

// ¿Cómo trabajamos con params?
app.put('/authors/:name/:age', (req, res) => {
  console.log(req.params);
  return res.status(200).send(req.params);
});
//INSOMNIA PUT localhost:3000/authors/Pedro/26
// {
//   "name": "Pedro",
//   "age": "26"
// }

// ¿Cómo trabajamos con el body?
app.post('/profile', (req, res) => {
  console.log(req.body)
  // Aquí iríamos a la base de datos para
  // intentar crear un elemento con lo que contiene req.body
  const respuesta = { id: 57, ...req.body };
  // Spread Syntax ...req.body: https://medium.com/@paulryan17/spread-operator-javascript-a77a890b96eb
  res.status(201).json(respuesta);
});
//INSOMNIA POST localhost:3000/profile
// {
//   name: 'Peter',
//   number: 99884554
// }
// {
//   id: 57,
//   name: 'Peter',
//   number: 99884554
// }

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`));
