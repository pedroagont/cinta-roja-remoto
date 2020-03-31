const request = require('request');

// console.log('Haremos una petición!');
// // request.get(foo, bar) es lo mismo que request(foo, bar)
// request('http://www.google.com', (error, response, body) => {
//   // console.error('error:', error); // Print the error if one occurred
//   // console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
//   // console.log('body:', body); // Print the HTML for the Google homepage.
//   // console.log('👹 Cuerpo de la respuesta: ', body);
//   console.log('🤪 Código de estado: ', response.statusCode);
// });
// console.log('Ha terminado la petición!');


// const SWAPI_URL = 'https://swapi.co/api/'
// const SWAPI_URL = 'https://swapi.co/api/people/1' // Luke Skywalker
const SWAPI_URL = 'https://swapi.co/api/people/4' // Darth Vader

request.get(SWAPI_URL, (err, res, body) => {
  console.log(res.statusCode);
  // console.log(body);
  // console.log(body.people); //undefined
  const json = JSON.parse(body)
  // console.log(json);
  console.log(`Mi nombre es ${json.name} y nací en el ${json.birth_year}`);
})
