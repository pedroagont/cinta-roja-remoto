// const objetoLiteral = {
//   nombre: 'Pedro',
//   apellido: 'González',
//   comer: () => console.log('comiendo')
// }
//
// const json = {
//   'nombre': 'Pedro',
//   'apellido': 'González',
//   'comer': true
// }
//
// // A diferencia de un objetoliteral, un JSON es el mínimo objeto en la Arquitectura REST y sus atributos van entre comillas
//
// // Las clases fueron agregadas a JS desde ES6 : syntactic sugar
// // De Wikipedia:
// // In computer science, syntactic sugar is syntax within a programming
// // language that is designed to make things easier to read or to express.
// // It makes the language "sweeter" for human use: things can be expressed
// // more clearly, more concisely, or in an alternative style that some may prefer.
//
// var dimensiones = {
//     altura: 34,
//     anchura: 455
// }
//
// console.log("altura: ",dimensiones.altura)
// console.log("anchura: ",dimensiones.anchura)
//
// // A la hora de concatenar:
// // El símbolo + convierte a cadena
// // Las comas (,) se usan para respetar el tipo de dato
// // Ejemplo de esto se ve en los colores a la hora de imprimir en consola
//
// class Poligono {
//   constructor(figura, alto, ancho) {
//     this.figura = figura
//     this.alto = alto;
//     this.ancho = ancho;
//   }
//   getName(){
//     return this.figura;
//   }
//   getArea(){
//       return this.alto * this.ancho
//   }
// };
//
// const rectangulo = new Poligono("rectangulo",33,44);
//
// console.log("Area del poligono: ",rectangulo.getArea());


// Ejemplo mascota o Perro
// Nota, si usamos ejemplo con clase mascota habrá que especificar qué animal es

// class Mascota {
//   //El constructor es el método de las clases que recibe y asigna los atributos
//   constructor(nombre, tipo, raza, edad) {
//     // console.log(nombre);
//     // console.log(tipo);
//     // this. sirve para que el argumento se declare como parte del objeto, sino sólo es un dato sin referencia
//     this.name = nombre;
//     this.type = tipo;
//     this.breed = raza;
//     this.age = edad;
//   }
//   comer(comida) {
//     return `${this.name} está comiendo ${comida}`
//   }
//   getName() {
//     return this.name;
//   }
//   setName(newName) {
//     // if(name === undefined) return 'ERROR';
//     // if(name === undefined) throw new Error('Debes introducir un nombre');
//     if (!newName) {
//       throw new Error('Debes introducir un nombre');
//     }
//     return (this.name = newName)
//   }
// }
//
// const perro = new Mascota(
//   'Ayudante de Santa',
//   'Perro',
//   'Galgo',
//   7
// );
// console.log(perro);
// console.log(perro.comer());
// console.log(perro.comer('croquetas'));
//
// const gato = new Mascota(
//   'Gizmo',
//   'Gato',
//   'Persa',
//   4
// );
// console.log(gato);
// console.log(gato.comer());
// console.log(gato.comer('atún'));

// 4 PILARES DE LA PROGRAMACIÓN ORIENTADA A OBJETOS POO
// Abstracción: abstraer características de cualquier objeto de la vida real y representarlo mediante una clase que cuente con atributos y métodos.
// Encapsulamiento: encerrar todo lo que un objeto necesita en sus atributos y métodos para que todo esté contenido en un solo lugar.
// Polimorfismo: habilidad de un hijo (una instacia de una clase) para redefinir cualquiera de sus atributos o métodos sin importar lo que obtenga del padre (clase de la que se creó la instancia)
// Herencia: posibilidad de pasar toda la información de una clase padre a una clase hijo, para reutilizar código.


// Ejercicios Clases (POO)
// 1.- Haz una clase llamada Persona que siga las siguientes condiciones:
// 	 Sus atributos son: nombre, edad, RFC, sexo, peso y altura.
// 	 calcularIMC()
// 	 esMayorDeEdad()
// 	 El constructor pide nombre, edad,sexo,peso y altura
// 	 Generar el RFC a partir de el nombre, edad y sexo

class Persona {
  constructor(nombre, edad, sexo, peso, altura){
    this.name = nombre;
    this.age = edad;
    this.gender = sexo;
    this.weight = peso;
    this.height = altura;
  }

  calcularIMC(){
      this.imc = this.weight / (this.height*this.height)
      if (this.imc >= 30) {
          return `${this.name} tiene obesidad`;
      } else if(this.imc >= 25) {
          return `${this.name} tiene sobrepeso`;
      } else if(this.imc >= 18.5) {
          return `${this.name} tiene un peso saludable`;
      } else {
          return `${this.name} tiene delgadez`;
      }
  }

  esMayorDeEdad(){
      if (this.age>=18){
          return `${this.name} es mayor de edad!`;
      } else {
          return `${this.name} es menor de edad!`;
    }
  }

  generarRFC(){
      return `${this.name[0]}${this.name.length}${this.age}${this.gender}`;
  }

}

const pedro = new Persona('Pedro', 26, 'M', 75, 1.80)

console.log(pedro)
console.log(pedro.calcularIMC())
console.log(pedro.esMayorDeEdad())
console.log(pedro.generarRFC())



// 2.- Crear una clase Cuenta que tenga los siguientes atributos y metodos:
// 	 -Titular y cantidad
// 	 -ingresar(cantidad)
// 	 -retirar(cantidad)
// 	 Hacer las validaciones previas
// 	 Como regla de negocio no debe de tener más de $900 y menos de $10

class Cuenta {
  constructor(titular, cantidad) {
    this.titular = titular;
    this.cantidad = cantidad;
  }

  getTitular() {
    return this.titular;
  }

  setTitular(titular) {
    return this.titular = titular;
  }

  getCantidad() {
    return this.cantidad;
  }

  // no debe de tener más de $900
  ingresar(dinero) {
    const cantidadFinal = this.cantidad + dinero;
    if (cantidadFinal > 900) {
      throw new Error('No puedes tener más de $900 en la cuenta');
    }
    return this.cantidad = cantidadFinal;
  }

  // no debe de tener menos de $10
  retirar(dinero) {
    const cantidadFinal = this.cantidad - dinero;
    if (cantidadFinal < 10) {
      throw new Error('No puedes tener menos de $10 en la cuenta');
    }
    return this.cantidad = cantidadFinal;
  }
}

const cuenta = new Cuenta('Pedro', 27.50);

console.log(cuenta);
console.log(cuenta.getTitular());
console.log(cuenta.setTitular('Maui'));

console.log(cuenta.getCantidad());
console.log(cuenta.ingresar(100));
console.log(cuenta.ingresar(300));
console.log(cuenta.ingresar(500));
