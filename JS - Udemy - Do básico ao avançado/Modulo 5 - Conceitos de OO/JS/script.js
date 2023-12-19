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

  // Utilizando métodos para interagir com as propriedades, semelhante aos Getters e Setters
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
  let dog = Object.create({}); // Criando um objeto vazio
  dog.race = race; // Inicializando as propriedades do objeto dog
  dog.paws = paws;
  dog.color = color;

  dog.bark = function () {
    return `AU AU AU`;
  };

  return dog;
}
const doberman = dogCreate("Doberman", 4, "Black"); // Instanciando a classe dogCreate
console.log(doberman); // Acessando esse novo objeto
console.log(doberman.bark());

// Constructor with New => Usado para criar instâncias de objetos a partir de uma função construtora
function Car(brand, color, year, engineType, model) {
  this.brand = brand;
  this.color = color;
  this.year = year;
  this.engineType = engineType;
  this.model = model;

  this.start = function () {
    return `Ligando o motor!`;
  };
}

const corsa = new Car("Chevrolet", "Yellow", 2002, "Combustão", "Corsa"); // Instanciando a classe Car criando o objeto corsa
console.log(corsa);

// Constructor with methods => Podemos criar a classe base já com métodos, basta definir ao prototype o método desejado
function CarTwo(brand, color, year, engineType, model) {
  this.brand = brand;
  this.color = color;
  this.year = year;
  this.engineType = engineType;
  this.model = model;
}

// Atrelando o método ao prototype da classe CarTwo, separando o escopo da classe apenas para as propriedades
CarTwo.prototype.start = function () {
  return `Ligando o motor!`;
};

CarTwo.prototype.off = function () {
  return `Desligando o motor!`;
};

const celta = new CarTwo("Chevrolet", "Silver", 2000, "Electric", "Celta");
console.log(celta);

// Constructor with class(ES6) => Funcionalidade vinda na versão EcmaScript 6 que utiliza uma sintaxe mais proxima do que é visto em outras linguagens
class CarThree {
  // Definindo as propriedades da classe pela sintaxe de constructor
  constructor(brand, color, year, engineType, model) {
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.engineType = engineType;
    this.model = model;
  }

  start() {
    return `Ligando o motor!`;
  }

  off() {
    return `Desligando o motor!`;
  }
}
const spin = new CarThree("Chevrolet", "White", 2023, "Electric", "Spin");
console.log(spin);

CarThree.prototype.wheels = 4; // Passando uma propriedade e um valor por meio do prototype sem a necessidade de passar como parâmetro
console.log(spin.wheels);

// Override => Sempre que acionamos uma propriedade a um objeto, é criada uma idêntica no Prototype
class CarFour {
  constructor(brand, color, year, engineType, model) {
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.engineType = engineType;
    this.model = model;
  }

  start() {
    return `Ligando o motor!`;
  }

  off() {
    return `Desligando o motor!`;
  }
}
CarFour.prototype.brand = undefined; // Criando um valor default para as propriedades da classe sem afetar o objeto instanciado

const montana = new CarFour("Chevrolet", "Blue", 2024, "Electric", "Montana");
console.log(montana);

console.log(CarFour.brand); // Retorna o valor default
console.log(montana.brand); // Retorna o valor instanciado para o objeto

// Symbols => Propriedades únicas, que não podem ser alteradas e nem criadas duas vezes
class CarFive {
  constructor(brand, color, year, engineType, model) {
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.engineType = engineType;
    this.model = model;
  }

  start() {
    return `Ligando o motor!`;
  }

  off() {
    return `Desligando o motor!`;
  }
}

// Criando um valor default para uma propriedade por meio do Symbol
let brand = Symbol();
CarFive.prototype[brand] = "Chevrolet"; // Atribuindo valor ao Symbol

console.log(`Acessando Symbol: ${CarFive.prototype[brand]}`); // Acessando o Symbol

const onix = new CarFive("Chevrolet", "Blue", 2024, "Electric", "Ônix");
console.log(onix);
console.log(onix[brand]);

// Getters => Serve para resgatar o valor de uma propriedade
// Setters => Serve para alterar o valor de uma propriedade
class CarSix {
  constructor(brand, color, year, engineType, model) {
    this.brand = brand;
    this.color = color;
    this.year = year;
    this.engineType = engineType;
    this.model = model;
  }

  start() {
    return `Ligando o motor!`;
  }

  off() {
    return `Desligando o motor!`;
  }

  get getColor() {
    return this.color; // Retorna o valor de color
  }

  set setColor(color) {
    this.color = color; // Atribui o valor passado como parâmetro para a propriedade color
  }
}
const myCar = new CarSix("Mercedes", undefined, "2024", "Electric", "G63 AMG");
console.log(myCar);

myCar.setColor = "Black"; // Atribuindo um valor por meio do set
console.log(myCar.getColor); // Retornando o valor atribuído por meio do get

console.log(myCar);

// inheritance => Uma classe pode herdar propriedades de outra classe por herança utilizando a sintaxe extends
class Mammal {
  constructor(paws) {
    this.paws = paws;
  }
}
const coiote = new Mammal(4);
console.log(coiote);

class Cat extends Mammal {
  constructor(paws, color) {
    super(paws, paws);
    this.color = color;
  }

  meow() {
    return `MEOW MEOW MEOW!`
  }
}
const catOne = new Cat(4, "Black");
console.log(catOne);
console.log(catOne.meow());

//! Operador instaceOf => Aula 198