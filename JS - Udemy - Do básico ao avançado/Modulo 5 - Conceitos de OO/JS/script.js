console.warn("Modulo 5 - Conceitos de OO");

// Métodos da orientação a objetos => Propriedades que agem como funções
const dog = {
  // Definindo propriedades para o objeto
  name: `Rasky`,
  age: 5,
  size: "average",
  race: "SND",

  // Criando métodos para o objeto
  bark: function () {
    return `AU AU`;
  },

  growl: function () {
    return `GRRRRRR`;
  },

  // Utilizando métodos para interagir com as propriedades
  setRace: function (race) {
    this.race = race;
  },

  getRace: function () {
    return `A raça do cachorro é: ${this.race}`;
  },
};
console.log(dog.bark()); // Executando os métodos criados
console.log(dog.growl());

dog.setRace("Husky"); // Atribuindo um valor especifico a propriedade
console.log(dog.race);

// Prototypes => Prototypes em JavaScript são um mecanismo que permite objetos herdar propriedades e métodos de outros objetos, formando uma cadeia de protótipos para facilitar a herança
const person = {
  hands: 2,
};
console.log(Object.getPrototypeOf(person)); // O objeto criado tem como prototype o objetos Object
console.log(Object.getPrototypeOf(person) === Object.prototype);

console.log(person.hasOwnProperty("hands")); // Executando o fallback de um método pertencente ao objeto Object para o objeto Person

// Criando um objeto que herda tanto as propriedades do objeto base quanto do objeto Object
const newPerson = Object.create(person);
console.log(newPerson.hands); // Acessando uma propriedade que pertence ao objeto person por via do newPerson
console.log(newPerson.hasOwnProperty("hands")); // Método passado do Object para o objeto person e depois para o objeto newPerson
console.log(Object.getPrototypeOf(newPerson) === person); // verificando se newPerson é prototype de person

// Class => É uma estrutura para criar objetos, contendo propriedades e métodos associados a instâncias
// A classe DogTwo servindo de molde para futuras classes serem criadas
const DogTwo = {
  paws: 4,
  race: "SRD",

  bark: function () {
    console.log(`AU AU AU`);
  },
};

const labrador = Object.create(DogTwo); // Criando o objeto labrador com base em DogTwo
labrador.race = "Labrador"; // Atribuindo um valor para a propriedade herdada da classe DogTwo
console.log(labrador.race); // Acessando a propriedade race do objeto labrador
console.log(DogTwo.race); // Acessando a propriedade race do objeto DogTwo

// Constructor with function => Forma de instanciar, ou seja, criar um novo objeto com base na classe instanciada
function dogCreate(race, paws, color) {
  let dog = Object.create({});
  dog.race = race;
  dog.paws = paws;
  dog.color = color;

  dog.bark = function () {
    return `AU AU AU`;
  };

  return dog;
}

const doberman = dogCreate("Doberman", 4, "Black");
console.log(doberman);
console.log(doberman.bark());

// Constructor with New => Usado para criar instâncias de objetos a partir de uma função construtora
function Car(brand, color, year) {
  this.brand = brand;
  this.color = color;
  this.year = year;

  this.start = function () {
    return `Ligando o motor!`;
  };
}

const corsa = new Car("Chevrolet", "Yellow", 2002); // Instanciando a classe Car criando o objeto corsa
console.log(corsa.start());

// Constructor with methods => Podemos criar a classe base já com métodos, basta definir ao prototype o método desejado
function CarTwo(brand, color, year) {
  this.brand = brand;
  this.color = color;
  this.year = year;
}

// Atrelando o método ao prototype da classe CarTwo, separando o escopo da classe apenas para as propriedades
CarTwo.prototype.start = function () {
  return `Ligando o motor!`;
};

CarTwo.prototype.off = function () {
  return `Desligando o motor!`;
};

const celta = new CarTwo("Chevrolet", "Silver", 2000);
console.log(celta.start());
console.log(celta.off());

// Constructor with class(ES6) => Funcionalidade vinda na versão EcmaScript 6 que utiliza uma sintaxe mais proxima do que é visto em outras linguagens
class CarThree {
  constructor(brand, color, year, model) {
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.model = model;
  }

  start() {
    return `Ligando o motor!`;
  }

  off() {
    return `Desligando o motor!`;
  }
}
CarThree.prototype.wheels = 4; // Passando uma propriedade e um valor por meio do prototype sem a necessidade de passar como parâmetro

const spin = new CarThree("Chevrolet", "White", 2023, "Spin");
console.log(spin);
console.log(spin.wheels);

//! Override no prototype => Aula 194