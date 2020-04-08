const express = require('express');
const app = express();
const PORT = process.env.PORT || 6060;

// Middleware
app.use(express.json());
app.use(express.urlencoded({extended: true}));

// Endpoints
app.get('/', (req, res) => res.json('Bienvenido!'));

//Encender el servidor
app.listen(PORT, () => console.log(`Servidor en puerto ${PORT}`));
