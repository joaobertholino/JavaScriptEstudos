console.warn(`Modulo 4 - Arrays e Objetos`);

// Array => São listas de dados, que podem ser acessados por meio de um índice numérico (começando em 0)
// Devem ser declarados entre colchetes [] e os itens separados por vírgula
const stringArray = ["João", "Ellen", "Maria", "José", "Pedro", "Paulo", "Lucas"];
console.log(stringArray);

const numberArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log(numberArray);

const booleanArray = [true, false, true, false, false, true];
console.log(booleanArray);

const mixedArray = ["João", 1, true, "Maria", 2, false, "Pedro", 3, true]; // Não é uma boa prática
console.log(mixedArray);

// Acessando itens do array por meio do índice usando a sintaxe nomeDoArray[índice]
const arrayOne = ["João", "Ellen", "Maria", "José", "Pedro", "Paulo", "Lucas"];
console.log(arrayOne[0]); // Acessando o primeiro item do array
console.log(arrayOne[1]); // Acessando o segundo item do array
console.log(arrayOne[arrayOne.length - 1]); // Acessando o último item do array pelo método length - 1 (pois o índice começa em 0)

// Propriedades são informações que podem ser verificadas de um valor, quase todos os tipos de dados possuem propriedades com exceção de null e undefined, usam a sintaxe nomeDoArray.nomeDaPropriedade
const arrayTwo = ["João", "Ellen", "Maria", "José", "Pedro", "Paulo", "Lucas"];
console.log(arrayTwo.length); // length => Retorna o tamanho do array (quantidade de elementos)
console.log(arrayTwo["length"]); // Também é possível acessar a propriedade length usando a sintaxe de colchetes

// Métodos são ações que funcionam como funções, mas que são executadas por meio de um objeto, usam a sintaxe nomeDoArray.nomeDoMétodo()
// Métodos de array
const arrayMethods = ["JavaScript", "TypeScript", "NodeJs", "ReactJs", "Angular", "HTML", "CSS"];

// pop(); => Remove o ultimo elemento do array e retorna o elemento removido
const removedLastElement = arrayMethods.pop();
console.log(arrayMethods);

// push(); => Adiciona um ou mais novos elementos ao final do array
const addElement = arrayMethods.push(removedLastElement); // Adicionando o elemento do qual foi removido e armazenado em uma variável
console.log(arrayMethods);

// shift(); => Remove o primeiro elemento do array e retorna esse elemento
const removedFirstElement = arrayMethods.shift();
console.log(arrayMethods);

// unshift(); => Adiciona um ou mais elementos no inicio do array e retorna o novo comprimento do array
const newlength = arrayMethods.unshift(removedFirstElement);
console.log(`Novo comprimento(length) do array: ${newlength}`);
console.log(arrayMethods);

// indexOf(); => Encontra o índice de um determinado elemento, caso encontre, retorna o índice da primeira ocorrência, caso não encontre, retorna -1
const indiceElement = arrayMethods.indexOf("TypeScript");
console.log(indiceElement);

// lastIndexOf(); => Encontra o ultimo índice de um elemento, caso encontre, retorna o índice da ultima ocorrência, caso não encontre, retorna -1
const lastIndiceElement = arrayMethods.lastIndexOf("Angular");
console.log(lastIndiceElement);

// slice(); => Retorna um array a partir de outro array, o array retornado é determinado pelos parâmetros que são os índices de início e fim do novo array
const sliceMethodsOne = arrayMethods.slice(1, 5); // Retornando um novo array com os elementos do índice 1 ao 3, índice 4 é exclusivo
console.log(sliceMethodsOne);

const sliceMethodsTwo = arrayMethods.slice(-2); // Retornando um novo array com os 2 últimos elementos do array original
console.log(sliceMethodsTwo);

const sliceMethodsThree = arrayMethods.slice(1, -2); // Retornando um novo array com os elementos a partir do índice 1 com exceção dos dois últimos
console.log(sliceMethodsThree);

// forEach((params) => {}); => Itera por cada elemento do array executando uma função para cada um
arrayMethods.forEach((language) => {
  console.log(`Linguagem: ${language}`); // Cada elemento do array passa a ser argumento para o parâmetro passado
});

// includes(); => Verifica se um array tem um determinado elemento
const arrayIncludes = arrayMethods.includes("Java"); // Retorna um boolean
console.log(arrayIncludes);

// reverse(); => Retorna um novo array sendo ele em ordem invertida em relação ao original
const arrayReverse = arrayMethods.reverse();
console.log(arrayReverse);

// Métodos de String
// trim(); => Remove espaços em branco do inicio e do final de uma string
const trimMethodOne = `      João     `;
const methodTrim = trimMethodOne.trim();
console.log(methodTrim);

// padStart(); => Inserir caracteres antes da string
const valueMoney = "300";
const padStartMoney = valueMoney.padStart(5, "R$"); // padStart(comprimentoDesejado, valorAdicionado)
console.log(padStartMoney);

// split(""); => Divide uma string por um separador e retorna um novo array
const phrase = `Testando método split do JS`;

const splitPhraseLether = phrase.split(""); // Retorna cada caractere da string como um elemento do array
console.log(splitPhraseLether);

const splitPhaseWords = phrase.split(" "); // Retorna cada palavra separada por espaços da string
console.log(splitPhaseWords);

//! Métodos de string: join => Aula 151;

// Objetos => São estruturas que permitem armazenar diversos valores em uma mesma variável, permitindo acessá-los por meio de um nome
// Devem ser declarados entre chaves {} e os itens separados por vírgula
const Dog = {
  color: "Silver",
  name: "Shark",

  // Criando métodos para o objeto
  bark: () => {
    return `Au Au`;
  },
};
// Acessando o objeto por completo
console.log(Dog);

// Acessando propriedades do objeto
console.log(Dog.name);

// Acessando métodos do objeto
console.log(Dog.bark());

// Deletando a adicionando propriedades ao objeto
const PersonOne = {
  name: `João`,
  age: `21`,
  profession: `Programador`,

  sayHi: () => {
    return `Olá, meu nome é ${PersonOne.name}, tenho ${PersonOne.age} anos`;
  },

  sayBye: () => {
    return `Tchau, tenha uma boa viajem!`;
  },
};
console.log(PersonOne);

// Deletando propriedades => Não muito usado tendo em vista que pode-se apenas ignorar uma propriedade
delete PersonOne.profession;
console.log(PersonOne);

// Adicionando propriedades
PersonOne.birthday = `03/07/2002`;
console.log(PersonOne);

// Herança de propriedades entre um objeto e outro
const Car = {
  doors: 4,
  color: "Red",
  brand: "Ford",
};

const Additional = {
  sunroof: true,
  airConditioning: true,
};
console.log(Car);

// Utilizando o objeto "Object" junto ao método "assign" onde o objeto "Car" herda as propriedades do objeto "Additional"
Object.assign(Car, Additional);
console.log(Car);

// Verificando quais chaves cada objeto possui utilizando a sintaxe => Object.keys(nomeDoObjeto)
console.log(Object.keys(Car)); // Retorna um array indexado com cada chave do objeto, inclusive as chaves herdadas de outro objeto

//! Mutabilidade => Um objeto pode herdar todas as características do outro, virando uma referencia ao mesmo
const CatOne = {
  name: "Boris",
};

// Referencia a objetos
const CatTwo = CatOne;
console.log(CatOne === CatTwo); // Comparando para ver se o objeto CatOne é estritamente igual a CatTwo

CatTwo.name = `Romeo`;
console.log(CatOne.name); // Ao modificar um objeto, a modificação refletira em todos os objetos a qual ele se referencia

CatOne.name = "Sindy";
console.log(CatTwo.name); // Esse conceito se aplica a todos os objetos que possuem referentes

// Utilizando loop para iterar sobre cada elemento do array
const namesLoop = ["João", "Ellen", "Nicolas", "Adriano", "Lucas", "Marcos"];

for (let i = 0; i < namesLoop.length; i++) {
  console.log(`Names of array with loop: ${namesLoop[i]}`); // Imprimindo cada elemento do array por meio do loop
}
