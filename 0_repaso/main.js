// Variables

// Vanilla JS (o JS puro)
var num = 10 // mala práctica

//ES6 http://es6-features.org/
let miVariable = "hola"; // buena práctica
const edad = 26; // aún mejor buena práctica


// Tipos de datos

const cadena = "Esto es una cadena" // String
const booleano = true; // Boolean - Matemáticas discretas (todo como verdadero o falso, 1 o 0)
const numero = 23123; // Number
const arreglo = [1, 2, 3]; //Object

// Tipos de datos Falsy
const indefinido = undefined;
const nulo = null;
const noEsUnNumero = NaN;

console.log('Hola, va la constante:');
console.log(arreglo);
console.log(typeof arreglo);

const array = [
  1,
  'texto',
  [1, 2, 3],
  {
    nombre: 'Peter',
    apellido: 'Gonzalez'
  },
  function functionName() {

  },


]

const objeto = {
  //key: valor
  uno: 1,
  dos: 2,
  tres: 3
};

// A un arreglo accedes mediante la posición de cada dato -> arreglo[i]
// A un objeto accedes mediante la llave de cada atributo -> objeto.key

// Entrada

const entradaUsuario = prompt('Ingresa un texto');

// Salida

console.log(entradaUsuario);


// Estructuras de control

if (condition) {

} else {

}

for (var i = 0; i < arreglo.length; i++) {
  console.log(arreglo[i]);
}

function functionName(params) {
  let miVariable = "esta variable sólo funciona dentro de esta función";
}


// Funciones
// Vanilla
function sumar(num1, num2) {
  return num1 + num2;
}

// Función Anónima
const restar = function(num1, num2) {
  return num1 - num2;
}

// Función Anónima ES6
const restarFlecha = (num1, num2) => {
  return num1 - num2;
}


// Ejemplo sencillo aplicando todo el repaso

function esMayorDeEdad(persona) {
  const nombre = persona.nombre;
  const edad = persona.edad;

  // PSEUDOCÓDIGO:
  // if la persona tiene 18 o es mayor que 18
    // devuelve "es mayor de edad"
  // if es menor que 18
    // devuelve "estas pollito aun"

  // BOOLEANOS -> TRUE / FALSE
  // TRUE -> 1
  // FALSE -> 0

  if ( typeof edad !== 'number' ) {
    return 'Debes introducir un numero en la edad!'
  };

  // if (edad >= 18) {
  //   // Javascript Vanilla
  //   // return ("¡" + nombre + " es mayor de edad!");
  //   // ES6
  //   return (`¡${nombre} es mayor de edad!`);
  // } else if ( (edad <= 18) ) {
  //   return (`¡${nombre} está bien pollo!`);
  // }

  return edad >= 18
    ? ("¡" + nombre + " es mayor de edad!")
    : (`¡${nombre} está bien pollo!`);
}

const persona1 = {nombre: "Margarito", edad: 17}
const persona2 = {nombre: "Margaro", edad: 19}

esMayorDeEdad(persona1) //Margarito está bien pollo
esMayorDeEdad(persona2) //Márgaro es mayor de edad
