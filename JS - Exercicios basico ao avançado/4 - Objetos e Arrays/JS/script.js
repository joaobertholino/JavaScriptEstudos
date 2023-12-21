// Exercício 76 => Crie um objeto vazio e adicione três propriedades a ele, cada uma com diferentes tipos de valores
const ex76 = {};
ex76.string = `String`;
ex76.number = 19;
ex76.boolean = true;

console.log(ex76);

// Exercício 77 => Crie um objeto que represente um livro, com propriedades para título, autor e número de paginas. Em seguida, adicione um método ao objeto que imprima uma descrição do livro
const bookEx77 = {
  title: `Clean Code`,
  author: `Robert C. Martin`,
  pagQtd: 534,

  description: function () {
    return `O livro ${this.title} foi escrito pelo autor ${this.author} e contém ${this.pagQtd} paginas.`;
  },
};
console.log(bookEx77.title);
console.log(bookEx77.author);
console.log(bookEx77.pagQtd);
console.log(bookEx77.description());

// Exercício 78 => Crie um objeto "cachorro" com propriedades para raça, nome e idade. Adicione um método que retorne a idade do cachorro em anos humanos (idade do cachorro * 7)
const dogEx78 = {
  race: `Pastor Alemão`,
  name: `Romeo`,
  age: 5,

  ageConverted: function () {
    return `A idade do cachorro em anos humanos é: ${this.age * 7}`;
  },
};
console.log(dogEx78.race);
console.log(dogEx78.name);
console.log(dogEx78.age);
console.log(dogEx78.ageConverted());

// Exercício 79 => Crie um objeto que represente um carro, com propriedades para a marca, modelo, ano e velocidade atual, e os seguintes métodos: acelerar, frear e obter velocidade atual
const carEx79 = {
  brand: `Tesla`,
  model: `Model 3`,
  year: 2022,
  currentSpeed: 0,

  speedUp: function () {
    this.currentSpeed++;
    return `Acelerando o carro...`;
  },

  speedDown: function () {
    if (this.currentSpeed <= 0) {
      this.currentSpeed = 0;
      return `O carro está parado!`;
    } else {
      this.currentSpeed--;
      return `Freando o carro...`;
    }
  },

  currentSpeedMethod: function () {
    return `A velocidade atual é: ${this.currentSpeed}`;
  },
};
console.log(carEx79.brand);
console.log(carEx79.model);
console.log(carEx79.year);
console.log(carEx79.currentSpeed);
console.log(carEx79.speedUp());
console.log(carEx79.speedDown());
console.log(carEx79.currentSpeedMethod());

// Exercício 80 => Crie um objeto que represente um estudante, com propriedades para o nome, notas de várias matérias e um método para calcular a média das notas
const studentEx80 = {
  name: `João Bertholino`,
  grade: [10, 9.5, 7.5, 10, 10, 10],

  averageGrade: function () {
    if (this.grade.length === 0) {
      return `Sem notas disponíveis!`;
    }

    let averageGrade = this.grade.reduce((acc, x) => acc + x / this.grade.length, 0);

    if (averageGrade > 10) {
      return `O aluno alcançou a média maxima! => ${averageGrade}`;
    } else if (averageGrade >= 6) {
      return `O alunos está aprovado! => ${averageGrade}`;
    } else {
      return `O aluno está reprovado! => ${averageGrade}`;
    }
  },
};
console.log(studentEx80.name);
console.log(studentEx80.grade);
console.log(studentEx80.averageGrade());

// Exercício 81 => Crie um objeto que represente uma conta bancaria, que possuí uma propriedade de saldo e métodos para depósito e saque
const accountBank = {
  balance: 1000,

  withdraw: function (value) {
    if (this.balance === 0 || this.balance < value) {
      return `Você não possuí saldo suficiente para o saque! => Valor disponível: ${this.balance}`;
    } else {
      this.balance -= value;
      return `Efetuando saque no valor de: ${value}`;
    }
  },

  deposit: function (value) {
    this.balance += value;
    return `Efetuando deposito no valor de: ${value}`;
  },

  currentBalance: function () {
    return `Seu saldo atual é de: ${this.balance}`;
  },
};
console.log(accountBank.withdraw(568));
console.log(accountBank.withdraw(568));
console.log(accountBank.deposit(200));
console.log(accountBank.currentBalance());

// Exercício 82 => Crie um objeto "circulo" que possui uma propriedade de raio e dois métodos que calculam a área e a circunferência
const circleEx82 = {
  radius: 5,

  size: function () {
    let result = Math.PI * Math.pow(this.radius, 2);
    return `A Área desse circulo é: ${result}`;
  },

  girth: function () {
    let result = 2 * Math.PI * this.radius;
    return `A circunferência desse circulo è: ${result}`;
  },
};
console.log(circleEx82.radius);
console.log(circleEx82.size());
console.log(circleEx82.girth());

// Exercício 83 => Crie um objeto "tempo" que possui propriedades de horas, minutos e segundos, e um método para converter o tempo para segundos
const timeEx83 = {
  hours: 2,
  minutes: 30,
  seconds: 15,

  convertToSeconds: function () {
    if (this.hours === isNaN || this.minutes === isNaN || this.seconds === isNaN) {
      return `Insira valores numéricos de tempo validos!`;
    } else {
      let converted = this.hours * 3600 + this.minutes * 60 + this.seconds;
      return `O valor de tempo convertido para segundos é: ${converted}`;
    }
  },
};
console.log(timeEx83.convertToSeconds());

// Exercício 84 => Crie um objeto "retângulo" que possui propriedades para altura e largura, e um método para calcular a área
const rectangleEx84 = {
  height: 5,
  width: 10,

  rectangleSize: function () {
    let sizeResult = this.height * this.width;
    return `A área do retângulo é ${sizeResult}`;
  },
};
console.log(rectangleEx84.rectangleSize());

// Exercício 85 => Crie um objeto "quadrado" que herda as propriedades do objeto "retângulo" e substitua o método para calcular área
const squareEx85 = Object.create(rectangleEx84);
squareEx85.height = 5;
squareEx85.width = 5;

squareEx85.sizeCalc = function () {
  let sizeResult = this.width * this.width;
  return `A área do quadrado é: ${sizeResult}`;
};
console.log(squareEx85);
console.log(squareEx85.sizeCalc());

// Exercício 86 => Crie um objeto "livro" que possui propriedades para o titulo, autor e número de paginas, e um método para exibir o livro no console
const bookEx86 = {
  title: `1984`,
  author: `George Orwell`,
  pagQtd: 328,

  showBook: function () {
    console.log(`'${this.title}', com ${this.pagQtd} paginas, escrito pelo autor chamado: ${this.author}`);
  },
};
bookEx86.showBook();
