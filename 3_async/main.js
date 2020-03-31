
// Código Síncrono o secuencial
// Un proceso espera a que el anterior termine para poder ser ejecutado
// console.log('Funciona!');
// console.log('1');
// console.log('2');
// console.log('3');

// Código Asíncrono
// Procesos en paralelo, la respuesta se procesa hasta haber sido recibida, evita la detención innecesaria de procesos
// console.log('');
// console.log('1');
// setTimeout(()=>console.log('2'),3000);
// console.log('3');

// Nota:
// Javascript le da preferencia a los procesos síncronos y los asíncronos los pone en una pila de procesos, lo que permite que se ejecuten las tareas de manera adecuada y sin interrupciones



// Ejemplo

// const mensajeEnConsola = (callback, mensaje) => {
//   callback(mensaje);
// }
//
// mensajeEnConsola(console.log, 'Hola');
//
//
// const mostrarMensaje = () => console.log("Pasó un segundo!");

// console.log("¡Funciona!");       // SINCRONO
// FUNCION DE ORDEN SUPERIOR
// setTimeout(                         // ASYNC
//   mostrarMensaje,                // CALLBACK
//   0
// );
// console.log(3);                  // SINCRONO
// console.log(4);                  // SINCRONO

// JS Vanilla
// function sumarVanilla(a, b) {
//   console.log("Vamos a sumar dos numeros!");
//   return a+b;
// }

// ES6
// const sumar = (a, b) => {
//   console.log("Vamos a sumar dos numeros!");
//   return a+b
// };
//
// const esPar = (numero) => {
//   if (numero%2 === 0) return true
//   else return false
// }
//
// const esParLaSumaDeDosNumeros = (numero1, numero2) => {
//   const resultado1 = sumar(numero1, numero2);
//   const resultado2 = esPar(resultado1);
//   return resultado2;
// }

// const esPar2 = esPar(2);
// const esPar3 = esPar(4);
// if (esPar2 && esPar3) console.log("Los dos numeros son pares!")

// console.log(esParLaSumaDeDosNumeros(5, 7));
// Element.addEventListener("click", callback)



// EJERCICIOS CALLBACKS ASYNC
/*
1.- Muestra un mensaje en consola mediante un callback.
  La función de orden superior que escribas debe poder mostrar el mensaje como console.warn, console.log, console.info, o cualquier método para pintar en consola del objeto console.
*/

// const mensajeEnConsola = (callback, mensaje) => {
//   callback(mensaje);
// }
//
// mensajeEnConsola(console.info, "Hola");

/*
2.- Crear una función de orden superior que reciba como
    argumento una variable de cualquier tipo y un callback. La función de orden superior debe retornar como resultado, mediante el callback, cual es el tipo de dato de la variable ingresada e imprimir su contenido.
*/

// const higherOrder = (variable, callback) => {
//   callback(variable);
// }
//
// const obtenerTipoDeDato = (variable) => typeof(variable);
//
// const callbackContenido = (variable) => {
//   console.log(obtenerTipoDeDato(variable));
//   console.log(variable);
// }
//
// const miVariable = { nombre: "Maui" };
// higherOrder(miVariable, callbackContenido);

/*
3.- Crear una función de orden superior que reciba como
    argumentos dos números y un callback. Según el callback
    que se pase a la función, se devuelve la suma de los
    dos números, la resta de los dos números o la
    multiplicación de los dos números.
*/

// const resultado = (num1, num2, operacion) => {
//   if(typeof operacion !== 'function') throw new Error('Debes pasar funcion como argumento');
//   return operacion(num1, num2);
// }
//
// const suma = (num1, num2) => num1 + num2;
// const resta = (num1, num2) => num1 - num2;
// const multiplicacion = (num1, num2) => num1 * num2;
// const division = (num1, num2) => num1 / num2;
//
// console.log(resultado(5, 3, suma)); //8
// console.log(resultado(5, 3, resta)); //2
// console.log(resultado(5, 3, multiplicacion)); //15
// console.log(resultado(5, 3, division)); //1.6666


/*
4.- Escribe una función de orden superior que reciba una cadena de
    caracteres y debe devolver, mediante un callback, la
    cadena de caracteres en mayúsculas o en minúsculas.
            ordenSuperior("PejeLagarto", minus);
            -> pejelagarto
            ordenSuperior("PejeLagarto", mayus);
            -> PEJELARTO
*/

// const ordenSuperior = (cadena, convertir) => convertir(cadena);
//
// const minusculas = (cadena) => cadena.toLowerCase(); //pejelagarto
// const mayusculas = (cadena) => cadena.toUpperCase(); //PEJELAGARTO
//
// console.log(ordenSuperior('peJeLagArTo', minusculas));
// console.log(ordenSuperior('peJeLagArTo', mayusculas));

/*
5.- Hacer un arreglo de 4 cantidades de tiempo (en minutos)
    EJEMPLO [120, 80, 200, 100] y tomar solo las cantidades
    mayores a dos horas (hacer la comparación en horas)
    mediante un callback.
*/

const ordenSuperior = (tiempos, comparacion) => comparacion(tiempos);

const mayorDe2Horas = (tiempos) => {
  let arregloMayores2horasEnHrs = [];
  for (let i = 0; i < tiempos.length; i++) {
    if(tiempos[i]>=120) arregloMayores2horasEnHrs.push(parseFloat(tiempos[i]/60).toFixed(2));
  }
  return `Los tiempos mayores a 2 horas son: ${arregloMayores2horasEnHrs}`;
}

const menorDe2Horas = (tiempos) => {
  let arregloMenores2horasEnHrs = [];
  for (let i = 0; i < tiempos.length; i++) {
    if(tiempos[i]<120) arregloMenores2horasEnHrs.push(parseFloat(tiempos[i]/60).toFixed(2));
  }
  return `Los tiempos menores a 2 horas son: ${arregloMenores2horasEnHrs}`;
}

const arreglo = [120, 80, 200, 100];
console.log(ordenSuperior(arreglo, mayorDe2Horas)); // [120, 200]
console.log(ordenSuperior(arreglo, menorDe2Horas)); // [80, 100]

const otroArreglo = [300, 120, 100, 50, 10, 150];
console.log(ordenSuperior(otroArreglo, mayorDe2Horas)); // [300, 120, 150]
console.log(ordenSuperior(otroArreglo, menorDe2Horas)); // [100, 50, 10]


// RESPUESTA MAUI:

const timesInMinutes = [120, 80, 200, 100];

// const greaterThanTwoHours = (arrayOfTimes, callback) => {
  // const timesInHours = [];

  // Llenamos el arreglo transformando a horas
  // for (let i=0; i<arrayOfTimes.length; i++) {
  //   timesInHours.push( arrayOfTimes[i]/60 );
  // }
//   // Mostramos los valores mayores a dos horas
//   for (let i=0; i<timesInHours.length; i++) {
//     if (timesInHours[i] > 2) console.log(timesInHours[i], "es mayor a dos horas!");
//   }
// }

// const greaterThanTwoHours = (arrayOfTimes, callback) => {
//   const timesInHours = arrayOfTimes.map(time => time/60);
//   return callback(timesInHours);
// }
//
// const callback = (arrayTimesInHours) => {
//     // "a" representa cada elemento del arreglo al ser iterado
//     // arrayTimesInHours.forEach( (a) => {console.log(a)} )
//     arrayTimesInHours.forEach(time => time > 2
//       ? console.log('tiempo: ', time)
//       : undefined);
// }

// callback(timesInMinutes);

// greaterThanTwoHours(timesInMinutes, callback);

// const arreglo = ["Maria", "José", "Juan"];

// arreglo.map((elemento, i) => console.log(elemento, i));


// OPERADORES TERNARIOS:
//
// if (condition) {
//   console.log(object);
//   console.log(object);
// } else console.log(object);
//
// return condition
//   ? console.log("verdadero!")
//   : console.log("falso...");
