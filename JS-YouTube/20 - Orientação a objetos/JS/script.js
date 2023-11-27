// Criando classe chamada "Person"
class Person {
  // Usando a função "constructor" para atribuir propriedades a classe "Person"
  constructor(firstName, lastName, age) {
    // Assinalando os parâmetros á classe "Person"
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
  }

  // Criando métodos para essa classe => Método para pegar o "firstName" e o "lastName"
  getFullName() {
    return `${this.firstName} ${this.lastName}`;
  }

  // Métodos estáticos não necessitam que a classe seja instanciada, pelo fato de não utilizarem nenhuma propriedade da classe
  static speak() {
    return "Oiii :)";
  }
}

// Executando um método estático antes de instanciar a classe
console.log(Person.speak());

// Instanciando a classe "Person"
const person = new Person("Ellen", "Sthefane", 17);
console.log(person);
console.log(person.getFullName());


// "Herança" => Herdar propriedades de uma classe em outra classe
class Animal {
  constructor(name) {
    this.name = name;
  }

  // Definindo um método chamado "speak" para a classe "Animal"
  speak() {
    return `${this.name} made some noise!`;
  }
}

// Criando a classe "Cat" que estende a classe "Animal" 
class Cat extends Animal {
  constructor(name) {
    super(name);
  }

  // Sobrescrevendo o método "speak" herdado da classe "Animal"
  speak() {
    return `${this.name} meow!`;
  }
}

// Instanciando a classe "Animal"
const animal = new Animal("Boris");
console.log(animal.speak());

// Instanciando a classe "Cat"
const cat = new Cat("Romeo");
console.log(cat.speak());
