class Animal {
  constructor(name){
    if(!name) throw new Error('Name is required!');
    this.name = name;
    this.brain = true;
    this.legs = 0;
  }

  sleep() {
    return `${this.name} is sleeping... zZzZz`
  }
}

const animal_1 = new Animal('Zabumafú');

console.log(animal_1);
console.log(animal_1.sleep());


// Al heredar (extends)
// 1- Se reciben todos los métodos del papá
// 2- Podemos definir qué atributos heredar del papá mediante super

class Human extends Animal {
  constructor(name){
    super(name);
    this.legs = 2;
  }

  sleep(){
    return `${this.name} is sleeping on a bed... zZzZz`
  }
}

const human_1 = new Human('Maui');

console.log(human_1);
console.log(human_1.sleep());

class Pet extends Animal {
  constructor(name){
    super(name);
    this.legs = 4;
    this.fleas = 0;
  }

  askForFood(){
    return `${this.name} is asking for food`;
  }
}

const pet_1 = new Pet('Firulais');

console.log(pet_1);
console.log(pet_1.askForFood());
console.log(pet_1.sleep());


class Dog extends Pet {
  constructor(name, breed){
    super(name);
    this.breed = breed;
    this.fleas = 8;
  }

  askForFood(){
    return `${this.name} is eating crackers`
  }
}

class Cat extends Pet {
  constructor(name, breed){
    super(name);
    this.breed = breed;
    this.fleas = 4;
  }

  askForFood(){
    return `${this.name} is eating tuna`
  }
}

const dog_1 = new Dog('Scooby Doo','Danés');
const cat_1 = new Cat('Garfield', 'Persian')

console.log(dog_1);
console.log(dog_1.breed);
console.log(dog_1.askForFood());

console.log(cat_1);
console.log(cat_1.breed);
console.log(cat_1.askForFood());

// EJERCICIO HERENCIA
// Clase LARGOMETRAJE
//   Subclases: PELICULA / DOCUMENTAL
// Clase CINE
//   metodo: reproducir(largometraje) {
//     return ‘Wall-E tiene una duración de 103 minutos’;
//   }
// El código debe lucir similar a esto:
// Cine.reproducir(pelicula);
// Cine.reproducir(documental);

class Largometraje {
  constructor(name, duration) {
    this.name = name;
    this.duration = duration;
  }
}

class Pelicula extends Largometraje {
  constructor(name, duration, genre) {
    super(name, duration)
    this.genre = genre;
  }
}

class Documental extends Largometraje {
  constructor(name, duration, director) {
    super(name, duration)
    this.director = director;
  }
}

class Cine {
  constructor(name){
    this.name = name;
  }

  play(largometraje){
    return `Reproduciendo ${largometraje.name} con una duración de ${largometraje.duration} minutos en ${this.name}`;
  }
}

const pelicula_1 = new Pelicula('Wall-E',103,'kids')
const documental_1 = new Pelicula('Shenzhen: The Silicon Valley of Hardware',67,'WIRED')
const cine_1 = new Cine('Cinepolis')

console.log(cine_1.play(pelicula_1));
console.log(cine_1.play(documental_1));
