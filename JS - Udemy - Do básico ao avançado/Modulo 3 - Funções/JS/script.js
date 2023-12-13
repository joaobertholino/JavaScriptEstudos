console.warn(`Modulo 3 - Funções!`);
// Funções são blocos de código que podem ser executados e reutilizados. Elas podem ou não receber entradas de dados e retornar uma saída de dados
// Declarando uma função atribuindo os parâmetros x e y
function myFunctionOne(x, y) {
  return (x + y) ** x;
}
myFunctionOne(4, 8); // Chamando a função e passando os valores dos parâmetros
console.log(myFunctionOne(4, 5));

// Armazenando uma função em uma variável
const myFunctionTwo = function (x, y) {
  let randomNum = Math.random();
  return x ** y / randomNum;
};
myFunctionTwo(8, 3);
console.log(myFunctionTwo(4, 6));

// Criando uma função que executa um bloco condicional
function nameVerified(name) {
  if (name === "João") {
    console.log(`Olá ${name}`);
  } else {
    console.log(`Olá ${name}`);
  }
}
nameVerified("João");

// Escopo de uma função => Variáveis declaradas dentro de uma função não são acessadas fora do escopo da função
let escopeTest = 10; // Declarando uma variável de escopo global
console.log(escopeTest);

function escopeLocalOne() {
  let escopeTest = 20; // Declarando uma variável de escopo local com o mesmo nome da variável de escopo global
  console.log(escopeTest);
}
escopeLocalOne(); // Chamando a função que imprime a variável de escopo local

// Nested Scope => Escopo aninhado
let a = 10; // Escopo global

const multiplicar = (x, y) => {
  let a = x * y; // Escopo local da função
  if (a > 10) {
    let a = 0; // Escopo local da condicional
    console.log(a); // Imprimindo a variável de escopo local da condicional
  }
  console.log(a); // Imprimindo a variável de escopo local da função
};
multiplicar(2, 20);
console.log(a); // Imprimindo a variável de escopo global

// Arrow functions => As arrow functions são uma forma simplificada de escrever funções
const myArrowFunction = (x, y) => {
  return x + y;
};
console.log(myArrowFunction(2, 2));

// Arrow function oneLine => Não é muito utilizado por dificultar a leitura do código
const arrowOneLine = (x) => x * x;
console.log(arrowOneLine(2));

// Argumentos opcionais => Não é necessário passar argumentos para todos os parâmetros
const nameAge = (name, age) => {
  if (age === undefined) {
    console.log(`Seu nome é ${name}!`);
  } else {
    console.log(`Seu nome é ${name} e sua idade é ${age} anos!`);
  }
};
nameAge("João");
nameAge("João", 21);

// Argumentos default => Caso a função não receba algum dos argumentos, será atribuído um valor por padrão
const potential = (x, y = 2) => {
  return Math.pow(x, y);
};
console.log(potential(2));
console.log(potential(2, 4));

// Closure => É uma função que tem acesso ao escopo de uma função externa
// Declarando uma função passando o parâmetro x
const rememberSum = (x) => {
  // Retornando um outra função passando o parâmetro y
  return (y) => {
    return x + y; // Retornando a soma de x(que tera seu valor lembrado da função pai) e y
  };
};
let sumOne = rememberSum(2); // Armazenando a função filho junto ao argumento do parâmetro x
console.log(sumOne(5)); // Executando a função filho passando o argumento do parâmetro y

// Recursion => Funcionalidade que permite que uma função chame se própria novamente
const recursion = (i) => {
  // Se i - 1 for igual a 0 irá parar a recursão
  if (i - 1 === 0) {
    console.log(`${i} - Parar recursão!`);
    // Se o resto da divisão de i por 2 for 0 irá continuar a recursão agora com o argumento de i - 1
  } else if (i % 2 === 0) {
    console.log(`${i} é par!`);
    recursion(i - 1);
  } else {
    console.log(`${i} é ímpar!`);
    // Se nenhuma das condições anteriores retornarem true, irá continuar a recursão passando como argumento i - 1
    recursion(i - 1);
  }
};
recursion(10); // Executado a função pela primeira vez para iniciar o processo e recursividade
console.warn(`Modulo 3 - Funções!`);
console.warn(`Modulo 3 - Exercícios sobre funções`);

// Exercício 1 => Escreva uma função que imprima "Hello World!" no console
const helloWorldArrow = () => {
  return `Hello World!`;
};
console.log(helloWorldArrow());

function helloWorldDefault() {
  return `Hello World!`;
}
console.log(helloWorldDefault());

// Exercício 2 => Escreva uma função que receba um argumento de idade e imprima uma frase usando template literals interpolando o valor de idade passado como argumento
const ageArrow = (x) => {
  return `Você tem ${x} anos!`;
};
console.log(ageArrow(21));

function ageDefault(x) {
  return `Você tem ${x} anos!`;
}
console.log(ageDefault(17));

// Exercício 3 => Escreva uma função que soma dois valores passados como argumentos e retorna o resultado no console
const sumArrow = (x, y) => {
  return x + y;
};
console.log(sumArrow(2, 2));

function sumDefault(x, y) {
  return x + y;
}
console.log(sumDefault(4, 4));

// Exercício 4 => Escreva uma função que retorna um numero aleatório onde o numero máximo a ser retornado deve ser passado via parâmetro
const randomMaxArrow = (x) => {
  return Math.floor(Math.random() * x) + 1;
};
console.log(randomMaxArrow(10));

function randomMaxDefault(x) {
  return Math.floor(Math.random() * x) + 1;
}
console.log(randomMaxDefault(20));

// Exercício 5 => Escreva uma função que recebe como argumento a idade de uma pessoa e retorna se tem ou não permissão para entrar na auto-escola
const ageDriveArrow = (x) => {
  if (x >= 18) {
    console.log(`Pode entrar na auto escola!`);
  } else {
    console.log(`Não pode entrar na auto-escola!`);
  }
};
ageDriveArrow(18);
ageDriveArrow(17);

function ageDriveDefault(x) {
  if (x >= 18) {
    console.log(`Pode entrar na auto escola!`);
  } else {
    console.log(`Não pode entrar na auto-escola!`);
  }
}
ageDriveDefault(30);
ageDriveDefault(15);

// Exercício 6 => Escreva uma função que reconhece o tipo de dado passado e retorne uma mensagem para cada um deles
const typeDataArrow = (x) => {
  if (typeof x === "string") {
    console.log(`${x} - Este dado é uma string!`);
  } else if (typeof x === "number") {
    console.log(`${x} - Este dado é um number!`);
  } else {
    console.log(`${x} - Este dado é um boolean!`);
  }
};
typeDataArrow("João");
typeDataArrow(21);
typeDataArrow(true);

function typeDataDefault(x) {
  if (typeof x === "string") {
    console.log(`${x} - Este dado é uma string!`);
  } else if (typeof x === "number") {
    console.log(`${x} - Este dado é um number!`);
  } else {
    console.log(`${x} - Este dado é um boolean!`);
  }
}
typeDataDefault("Ellen");
typeDataDefault(17);
typeDataDefault(true);

// Exercício 7 => Escreva uma função que recebe um numero negativo e retorna o mesmo numero positivo
const negativeToPositiveArrow = (x) => {
  return Math.abs(x);
};
console.log(negativeToPositiveArrow(-14));

function negativeToPositiveDefault(x) {
  return Math.abs(x);
}
console.log(negativeToPositiveDefault(-37));

// Exercício 8 => Escreva uma função que recebe uma string, onde caso a string tiver mais que 10 caracteres imprima "Texto muito longo", se tiver menos, imprima "Texto dentro do limite"
const stringEx8One = `Olá, meu nome é João Bertholino, e o seu?`;
const stringVerifiedOne = (string) => {
  if (string.length >= 10) {
    console.log(`String muito longa!`);
  } else {
    console.log(`String dentro do limite!`);
  }
};
stringVerifiedOne(stringEx8One);

const stringEx8Two = `Olá!`;
function stringVerifiedTwo(string) {
  if (string.length >= 10) {
    console.log(`String muito longa!`);
  } else {
    console.log(`String dentro do limite!`);
  }
}
stringVerifiedTwo(stringEx8Two);

// Exercício 9 => Escreva uma função que recebe dois números, o primeiro é a base e o segundo a potência, depois retorne o resultado
const potentialTwo = (x, y) => {
  return Math.pow(x, y);
};
console.log(potentialTwo(4, 2));

function potentialThree(x, y) {
  return x ** y;
}
console.log(potentialThree(3, 4));

// Exercício 10 => Escreva uma função que recebe um numero, e o decrementa de 1 em 1 com um loop e imprima apenas os números pares no console
const decrementOne = (x) => {
  for (x; x >= 0; x--) {
    if (x % 2 === 0 && x !== 0) {
      console.log(`Imprimindo número par: ${x}`);
    }
  }
};
decrementOne(10);

function decrementTwo(x) {
  for (let i = x; i >= 0; i--) {
    if (i % 2 === 0 && i !== 0) {
      console.log(`Imprimindo número par: ${i}`);
    }
  }
}
decrementTwo(20);

console.warn(`Modulo 3 - Exercícios sobre funções`);