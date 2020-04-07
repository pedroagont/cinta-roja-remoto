// EJERCICIO CRUD DE PETICIONES CON PROMESAS
//
// Convierte todas tus funciones del ejercicio del
// CRUD de Cliente para que ahora devuelvan promesas.
//
// Es necesario que personalicen el mensaje de error
// de cada de una de las funciones para que sea más
// fácil identificar dónde se rompe nuestro código.
//
// Finalmente para probar tus nuevas promesas, tienes
// que hacer los siguientes pasos encadenando promesas:
// 1. Crear un autor
// 2. Modificar el autor
// 3. Obtener ese autor
// 4. Eliminar el autor


const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/api/v1/authors/';

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

 return new Promise((resolve, reject) => {
   request.post(URL_BASE, { form: jsonSend }, (err, res, body) => {
     console.log('Creando autor...');
     res.statusCode === 201
       ? resolve(JSON.parse(body))
       : reject({message: 'Error creating author', body});
   });
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

 return new Promise((resolve, reject) => {
   request.put(URL, { form: jsonSend }, (err, res, body) => {
     console.log('Modificando autor...');
     res.statusCode === 200
       ? resolve(JSON.parse(body))
       : reject({message: 'Error updating author', body});
   });
 });
}

// Read   - GET
const readOneAuthor = (id) => {
 const URL = `${URL_BASE}${id}/`;

 return new Promise((resolve, reject) => {
   request.get(URL, (err, res, body) => {
     console.log('Obteniendo autor...');

     res.statusCode === 200
       ? resolve(JSON.parse(body))
       : reject({message: 'Error obtaining author', body});
   });
 });
}

// Delete - DELETE
const deleteAuthor = (id) => {
  const URL = `${URL_BASE}${id}/`;

  return new Promise((resolve, reject) => {
    request.delete(URL, (err, res, body) => {
      console.log('Borrando autor...');
      res.statusCode === 204
        ? resolve({message: 'Author deleted succesfully'})
        : reject({message: 'Error deleting author', body});
    });
  });
}

// FORMA 1: DIRECTO PERO NO RECOMENDABLE
// createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 26)
//   .then(newAuthor => {
//     console.log('Autor creado:', newAuthor);
//     updateAuthor(newAuthor.id, 'Pedrito', 'Pedrini', 'MX', 'Chocolatini', 'M', 26)
//       .then(modifiedAuthor => {
//         console.log('Autor modificado:', modifiedAuthor);
//         readOneAuthor(modifiedAuthor.id)
//           .then(obtainedAuthor => {
//             console.log('Autor obtenido:', obtainedAuthor);
//             deleteAuthor(obtainedAuthor.id)
//               .then(response => console.log(response));
//           })
//       })
//   })
//   .catch(err => console.log(err));

// FORMA 2: CON RETURN, LO RECOMENDABLE
// createAuthor('Pedro', 'González', 'MX', 'Chavito bien', 'M', 26)
//   .then(newAuthor => {
//     console.log('Autor creado:', newAuthor);
//     return updateAuthor(newAuthor.id, 'Pedrito', 'Pedrini', 'MX', 'Chocolatini', 'M', 26)
//   })
//   .then(modifiedAuthor => {
//     console.log('Autor modificado:', modifiedAuthor);
//     return readOneAuthor(modifiedAuthor.id)
//   })
//   .then(obtainedAuthor => {
//     console.log('Autor obtenido:', obtainedAuthor);
//     return deleteAuthor(obtainedAuthor.id)
//   })
//   .then(deleteResponse => console.log(deleteResponse))
//   .catch(err => console.log(err));

// FORMA 3: USANDO ES6 ASYNC AWAIT
const authorLifeCycle = async () => {
  try {
    const newAuthor = await createAuthor(
      'Pedro', 'González', 'MX', 'Chavito bien', 'M', 26
    );
    console.log('Autor creado:', newAuthor);

    const modifiedAuthor = await updateAuthor(
      newAuthor.id, 'Pedrini', 'Gonzalius', 'USA', 'Coronavirus survivor', 'M', 27
    );
    console.log('Autor modificado:', modifiedAuthor);

    const obtainedAuthor = await readOneAuthor(modifiedAuthor.id);
    console.log('Autor leído:', obtainedAuthor);

    const deleteResponse = await deleteAuthor(obtainedAuthor.id);
    console.log(deleteResponse);
  } catch (error) {
    console.log(error);
  }
}

authorLifeCycle();
