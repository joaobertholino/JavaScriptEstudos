// Selecionar elementos
const metodoAntigo = document.getElementById("meuId"); // Metodo antigo
console.log(metodoAntigo);

const metodoModerno = document.querySelector("#meuId"); // Metodo moderno
console.log(metodoModerno);

//Manipular conteúdo de texto
const element = document.getElementById("meuId");
console.log(element.textContent); // Imprime no console o conteúdo desse elemento

element.textContent = "Outro conteúdo"; // Altera o conteúdo do elemento

setTimeout(() => {
  element.textContent = "Outro conteúdo após 2 segundos";
}, 2000);

// Trabalhando com atributos
const link = document.querySelector("a"); // Quando ha varios elementos iguais, o "querySelector" entrega apenas o primeiro elemento
console.log(link);

link.setAttribute("href", "https://horadecodar.com.br/cursos"); // Altera atributos dos elementos
console.log(link.getAttribute("href")); // Imprime no console o valor do atributo
console.log(link.hasAttribute("target")); // Imprime no console um boolean indicando se esse atributo existe ou não

link.removeAttribute("target"); // Remove atributos existentes

// Manipulação de classes do CSS
const element2 = document.getElementById("meuId");

element.classList.add("novaClasse"); // Adiciona uma classe
element.classList.remove("minhaClasse"); // Remove uma classe
element.classList.toggle("minhaClasse"); // Caso a classe já exista, será removida, se não existe, será adicionada

// Manipular o CSS
const element3 = document.getElementById("meuId");

element3.style.color = "green"; // Altera estilizações CSS
element3.style.backgroundColor = "purple"; // CSS: background-color => JS: backgroundColor (Utiliza-se camelCase no JavaScript)

// Navagação entre nós (Pais e Filhos)
const element4 = document.querySelector("#meuInput");

const pai = element4.parentNode; // Seleciona os elementos parentes
console.log(pai);

const primeiroFilho = pai.firstChild; // Seleciona o primeiro filho do elemento
console.log(primeiroFilho);

const ultimoFilho = pai.lastChild; // Seleciona o ultimo filho do elemento
console.log(ultimoFilho);

// Manipulação de estrutura do DOM
const novoElemento = document.createElement("div"); // Cria um novo elemento
console.log(novoElemento);

novoElemento.textContent = "Conteudo da nova DIV"; // Adiciona um conteúdo a esse novo elemento

document.body.appendChild(novoElemento); // Adiciona esse elemento na tela do usuário
document.body.insertBefore(novoElemento, pai); // Adiciona o novo elemento após o elemento pré-existente
document.body.removeChild(metodoAntigo); // Remove um elemento

// Events
const botão = document.querySelector("#botaoCriar");
botão.addEventListener("click", () => {
  console.log("Botão clicado!"); // Evento de "click" acionado por callback
});

const element5 = document.querySelector("#meuFormulario");
element5.addEventListener("mouseover", () => {
  console.log("O mouse passou aqui!"); // Evento de "mouseover"(Passar o mouse por cima) acionado por callback
});

const campoInput = document.querySelector("#meuInput");
campoInput.addEventListener("keydown", () => {
  console.log("Tecla precionada!"); // Evento de "keydown"(Computa quando uma tecla é precionada) acionado por callback
});

const form = document.querySelector("form");
form.addEventListener("submit", () => {
  console.log("Formulario enviado");
})

// 2:47:42 - Tempo da aula