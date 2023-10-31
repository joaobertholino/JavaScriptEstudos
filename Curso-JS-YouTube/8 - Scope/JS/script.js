// "Global" => Refere-se ao contexto em que as variáveis são acessíveis em todo o programa, ou seja, elas podem ser usadas em qualquer lugar, dentro de funções ou fora delas
// "Local" => É o contexto dentro de uma função, onde as variáveis são acessíveis apenas dentro dessa função e não podem ser vistas ou modificadas fora dela
let scope = 1; // Escopo global
let scope2 = 3; // Escopo global

const testeScope = () => {
  let scope = 2; // Escopo local
  console.log(scope); // Retorna no console o valor da variável do escopo local, porém, o contrario não é possível
  console.log(scope2); // É possível chamar variáveis do escopo global, no escopo local
};

console.log(scope); // Retorna no console o valor da variável do escopo global
testeScope();
