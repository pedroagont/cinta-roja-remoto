const request = require('request');
const URL_BASE = 'https://goodreads-devf-aaron.herokuapp.com/';

//  Create - POST
const createAuthor = (name, last_name, nacionalidad, biography, gender, age) => {
  const URL = `${URL_BASE}/api/v1/authors/`;

  const jsonSend = {
    'name': name,
    'last_name': last_name,
    'nacionalidad': nacionalidad,
    'biography': biography,
    'gender': gender,
    'age': age
  }

  request.post(URL, { form: jsonSend }, (err, res, body) => {
    console.log(res.statusCode, JSON.parse(body));
  })
}

// createAuthor('Pedro', 'González', 'MX', 'Chavo cool de Cancún', 'M', 26);


 // Read   - GET
// Para leer todos:
const readAllAuthors = (id) => {
  const URL = `${URL_BASE}/api/v1/authors/`;

  request.get(URL, (err, res, body) => {
    if(res.statusCode === 200){
      console.log(JSON.parse(body));
    } else console.log(res.statusCode, err);
  })
}

// readAllAuthors()


// Para leer un solo autor
const readOneAuthor = (id) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`;

  request.get(URL, (err, res, body) => {
    if(res.statusCode === 200){
      console.log(JSON.parse(body));
    } else console.log(res.statusCode, err);
  })
}

// readOneAuthor(6129)


//  Update - PUT/PATCH
const updateAuthor = (id, name, last_name, nacionalidad, biography, gender, age) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`;

  const jsonSend = {
    'name': name,
    'last_name': last_name,
    'nacionalidad': nacionalidad,
    'biography': biography,
    'gender': gender,
    'age': age
  };

  request.put(URL, { form: jsonSend }, (err, res, body) => {
    console.log(res.statusCode);
    console.log(JSON.parse(body));
  });
}

// updateAuthor(6129, "Yo mero", "Pacheco", "USA", "Aclamado mexicano que nacio en USA", "M", 10);


//  Delete - DELETE
const deleteAuthor = (id) => {
  const URL = `${URL_BASE}/api/v1/authors/${id}/`;
  request.delete(URL, (err, res, body) => {
    console.log(res.statusCode);
    // console.log(JSON.parse(body)); No tiene sentido parsear una respuesta vacía...
    if (res.statusCode === 204) console.log('Eliminado correctamente!');
  });
}

// deleteAuthor(6129)
