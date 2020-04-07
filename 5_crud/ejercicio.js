// EJERCICIO
// Ejecutar las siguientes funciones:
// Crear un autor
// Modificar ese autor
// Obtener autor
// Borrar autor

const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

 // Delete - DELETE
const deleteAuthor = (id) => {
  const URL = `${URL_BASE}${id}/`;
  request.delete(URL, (err, res, body) => {
    console.log('Borrando autor...');
    if (res.statusCode === 204) console.log(`id: ${id} fue eliminado correctamente`);
      // console.log(JSON.parse(body)); //El body regresa vacío, no es necesario parsearlo
    else console.log(res.statusCode, JSON.parse(body));
  });
}

// Read   - GET
const readOneAuthor = (id) => {
 const URL = `${URL_BASE}${id}/`;
 request.get(URL, (err, res, body) => {
   console.log('Obteniendo autor...');
   if(res.statusCode === 200){
     console.log(JSON.parse(body));
     deleteAuthor(JSON.parse(body).id);
   } else console.log(res.statusCode, err);
 });
}

// Update - PUT
const updateAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {
 const URL = `${URL_BASE}${id}/`;

 const jsonSend = {
   'name': name,
   'last_name': last_name,
   'nacionalidad': nacionalidad,
   'biography': biography,
   'gender': gender,
   'age': age
 };

 request.put(URL, { form: jsonSend }, (err, res, body) => {
   console.log('Modificando autor...');
   if(res.statusCode === 200){
     console.log(JSON.parse(body));
     readOneAuthor(JSON.parse(body).id);
   } else console.log(res.statusCode, err);
 });
}

 // Create - POST
const createAuthor = (name, last_name, nacionalidad, biography, gender, age) => {

  const jsonSend = {
    'name': name,
    'last_name': last_name,
    'nacionalidad': nacionalidad,
    'biography': biography,
    'gender': gender,
    'age': age
  }

  request.post(URL_BASE, { form: jsonSend }, (err, res, body) => {
    console.log('Creando autor...');
    if(res.statusCode === 201){
      console.log(JSON.parse(body));
      updateAuthor(JSON.parse(body).id, "Pedrito", "Pedrini", "USA", "Chavito good", "M", 10);
    } else console.log(res.statusCode, err);
  });
}

createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 26);
