// ¿Cómo funciona Math.random y Math.floor?
// console.log(Math.random()); //Imprime número aleatorio entre 0 y 1
// console.log(Math.random() * 10); //Imprime número aleatorio entre 1 y 10
// console.log(Math.floor(Math.random() * 10)); //Imprime número entero aleatorio entre 1 y 10

// Ejemplo Promesa

const promesaEdad = new Promise((resolve, reject) => {
  const edad = 15;
  if (edad >= 18) resolve('Simón!')
  reject('Nelson');
});

promesaEdad
  .then(resolucion => console.log(`Promesa resuelta: ${resolucion}`))
  .catch(rechazo => console.log(`Promesa rechazada: ${rechazo}`))


// Ejemplo Promesa con número aleatorio
const promise = new Promise((resolve, reject) => {
  const number = Math.floor(Math.random() * 10);

  setTimeout(() => number > 5
    ? resolve(number)
    : reject(new Error('El número es menor a 5'))
  , 1000)

});

promise
  .then(number => console.log(number))
  .catch(error => console.error(error));
