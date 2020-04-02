// 1.- Hacer una petición a cualquier pokemon y mostrar sus tipos.
//                     https://pokeapi.co/

// const request = require('request');
//
// const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/1'
//
// request.get(POKEAPI_URL, (err, res, body) => {
//   if(res.statusCode === 200) {
//     const json = JSON.parse(body);
//     console.log(`${json.name} has the next types:`);
//     json.types.forEach(type => console.log(type.type.name))
//   }
// })


// 2.- Hacer una funcion que haga una petición
//     Buscar un libro y traer el o los autores del primer libro
//     http://openlibrary.org/search.json?q=i+robot)
//     (Ejemplo: peticionLibro(“i robot”);


// const request = require('request');
//
// const peticionLibro = (titulo) => {
//
//   const URL_OPENLIBRARY = 'http://openlibrary.org/search.json?q=' + titulo;
//
//   request.get(URL_OPENLIBRARY, (err, res, body) => {
//     if(res.statusCode === 200) {
//       const primerLibro = JSON.parse(body).docs[0];
//       console.log(`Tu búsqueda "${titulo}" arrojó el siguiente resultado:`);
//       console.log(`"${primerLibro.title_suggest}" de ${primerLibro.author_name}`);
//     } else console.log(res.statusCode, err);
//   })
// }
//
// peticionLibro('i robot');


// 3.- Hacer una petición por autor y devolver la lista de
//     sus libros
//         http://openlibrary.org/search.json?author=asimov

// const request = require('request');
//
// const peticionAutor = (autor) => {
//
//   const URL_OPENLIBRARY_AUTOR = 'http://openlibrary.org/search.json?author=' + autor;
//
//   request.get(URL_OPENLIBRARY_AUTOR, (err, res, body) => {
//     if(res.statusCode === 200) {
//       console.log(`Tu búsqueda "${autor}" arrojó los siguientes resultados:`);
//       JSON.parse(body).docs.forEach(doc => console.log(`"${doc.title_suggest}"`));
//     } else console.log(res.statusCode, err);
//   })
// }
//
// peticionAutor('asimov');


// 4.- Hacer una petición y devolver el género de la banda deseada
//     http://www.theaudiodb.com/api/v1/json/1/search.php?s=muse

// const request = require('request');
//
// const peticionGenero = (artista) => {
//
//   const URL_THEAUDIODB = 'http://www.theaudiodb.com/api/v1/json/1/search.php?s=' + artista;
//
//   request.get(URL_THEAUDIODB, (err, res, body) => {
//     if(res.statusCode === 200) {
//       const respuesta = JSON.parse(body).artists[0]
//       console.log(`El genéro de ${respuesta.strArtist} es: ${respuesta.strGenre}`);
//     } else console.log(res.statusCode, err);
//   })
// }
//
// peticionGenero('muse');


// 5.- Hacer una petición a la swapi a un personaje y obtener
//     sus películas.
//                     https://swapi.co/

// const request = require('request');
//
// const URL_SWAPI = 'https://swapi.co/api/people/1'
//
// request.get(URL_SWAPI, (err, res, body) => {
//   if(res.statusCode === 200) {
//     const json = JSON.parse(body);
//
//     console.log(`${json.name} participated in the films:`);
//
//     json.films.map(film =>
//       request.get(film, (err, res, body) => console.log(JSON.parse(body).title))
//     )
//   } else console.log(res.statusCode, err);
// })


// 6.- Devolver los asteroides que sean potencialmente peligrosos
//     para la tierra de la semana pasada hasta el día de ayer.
//                     https://api.nasa.gov/
// Reference:
// google foreach/map is not a function javascript object
// https://stackoverflow.com/questions/31096596/why-is-foreach-not-a-function-for-this-object
//
// const request = require('request');
// const API_KEY = "OLAcexVmqAmjSUfSYiKtU4ECoBn8Nv9ApfhcIEV3";
//
// const peticionNasa = (fechaInicio, fechaFinal) => {
//   const URL_NASA = `https://api.nasa.gov/neo/rest/v1/feed?start_date=${fechaInicio}&end_date=${fechaFinal}&api_key=${API_KEY}`;
//   request.get(URL_NASA, (err, res, body) => {
//     if (res.statusCode === 200) {
//       const json = JSON.parse(body);
//       console.log('Los asteroides que son potencialmente peligrosos para la tierra son:');
//       Object.keys(json.near_earth_objects).forEach(object => {
//         const asteroids = json.near_earth_objects[object];
//         asteroids.forEach(hazardous => {
//           if (hazardous.is_potentially_hazardous_asteroid === true) {
//             console.log(`${hazardous.name}`);
//           }
//         })
//       })
//     } else console.log(res.statusCode, err);
//   })
// }
//
// peticionNasa('2020-03-22', '2020-03-29')
//

// 7.- Traer los primeros 151 pokemon de la primera generacion y
//     devolver un objeto con el nombre, sus moves, tipos, tamaño
//     y peso.
//                       https://pokeapi.co/

const request = require('request');
const POKEAPI_URL = 'https://pokeapi.co/api/v2/pokemon/';

const getPokemon = (n) => {

  for (let i = 1; i <= n; i++) {

    request.get(`${POKEAPI_URL}${i}`, (err, res, body) => {
      if(res.statusCode === 200) {
        const json = JSON.parse(body);

        let pokemon = {
          nombre: json.name,
          movimientos: json.moves,
          tipos: json.types,
          altura: json.height,
          peso: json.weight
        }

        console.log(pokemon);
      } else console.log(res.statusCode, err);
    })
  }
}

//getPokemon(151)
getPokemon(10)
