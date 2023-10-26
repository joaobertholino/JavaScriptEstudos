// Selecionar elementos do HTML no JS
// Método antigo
const métodoAntigo = document.getElementById("meuId");
console.log(métodoAntigo);

// Método moderno
const métodoModerno = document.querySelector("#meuId"); // "querySelector" => Retorna o primeiro elemento descendente do nó que corresponde aos seletores
console.log(métodoModerno);

const métodoModernoAll = document.querySelectorAll("#meuId"); // "querySelectorAll" => Retorna todos os elementos descendentes do nó que correspondem aos seletores
console.log(métodoModernoAll);

//Manipular conteúdo de texto
const element = document.querySelector("#meuId"); // É possível selecionar varias vezes o mesmo elemento
console.log(element.textContent); // "textContent" => Propriedade que interfere no conteúdo textual do elemento
element.textContent = "Outro conteúdo"; // Altera o conteúdo textual do elemento

setTimeout(() => {
  element.textContent = "Outro conteúdo após 2 segundos"; // Altera o conteúdo textual do elemento dentro de tempo definido
}, 2000); // 1000ms = 1s

// Trabalhando com atributos
const link = document.querySelector("a"); // Quando ha vários elementos iguais, o "querySelector" entrega apenas o primeiro elemento
console.log(link);

link.setAttribute("href", "https://horadecodar.com.br/cursos"); // Altera os atributos dos elementos
link.removeAttribute("target"); // "removeAttribute" => Remove atributos existentes

console.log(link.getAttribute("href")); // "getAttribute" => Retorna o valor do atributo
console.log(link.hasAttribute("target")); // "hasAttribute" => Retorna um boolean caso esse atributo exista ou não

// Manipulação de classes do CSS
const element2 = document.querySelector("#meuId");
element.classList.add("novaClasse"); // "add" => Adiciona uma nova classe
element.classList.remove("minhaClasse"); // "remove" => Remove uma classe existente
element.classList.toggle("minhaClasse"); // "toggle" => Caso a classe já exista, será removida, se não existe, será adicionada

// Manipulação de estilos CSS
const element3 = document.querySelector("#botaoEvento");
element3.style.color = "pink"; // "color" => Altera a cor da fonte, assim como no CSS
element3.style.backgroundColor = "purple"; // CSS: "background-color" => JS: "backgroundColor" (Utiliza-se camelCase no JavaScript)

// Navegação entre nós (Pais e Filhos)
const element4 = document.querySelector("#meuInput");

const pai = element4.parentNode; // "parentNode" => Seleciona os elementos parentes
console.log(pai);

const primeiroFilho = pai.firstChild; // "firstChild" => Seleciona o primeiro filho do elemento
console.log(primeiroFilho);

const ultimoFilho = pai.lastChild; // "lastChild" => Seleciona o ultimo filho do elemento
console.log(ultimoFilho);

// Manipulação de estrutura do DOM
const novoElemento = document.createElement("div"); // "createElement" => Cria um novo elemento
novoElemento.textContent = "Conteúdo da nova DIV"; // Adiciona um conteúdo textual a esse novo elemento
console.log(novoElemento);

document.body.appendChild(novoElemento); // "appendChild" => Método que adiciona esse elemento na tela do usuário
document.body.insertBefore(novoElemento, pai); // "insertBefore" => Método que adiciona o novo elemento após um outro elemento já preexistente
document.body.removeChild(métodoAntigo); // "removeChild" => Método que remove um elemento

// Events => Interações ou ações que ocorrem em elementos HTML
const botão = document.querySelector("#botaoCriar");
botão.addEventListener("click", () => {
  console.log("Botão clicado!"); // "click" => Computa um evento ao clicar no elemento, acionado por callback(função anônima) que será executado quando o evento ocorrer
});

const element5 = document.querySelector("#meuFormulario");
element5.addEventListener("mouseover", () => {
  console.log("O mouse passou aqui!"); // "mouseover" => Computa um evento ao passar o mouse pelo elemento, acionado por callback(função anônima) que será executado quando o evento ocorrer
});

const campoInput = document.querySelector("#meuInput");
campoInput.addEventListener("keydown", () => {
  console.log("Tecla pressionada!"); // "keydown" => Computa um evento quando um tecla é pressionada, acionado por callback(função anônima) que será executado quando o evento ocorrer
});

const form = document.querySelector("form");
form.addEventListener("submit", (event) => {
  event.preventDefault(); // "preventDefault" => Desabilita o comportamento padrão do elemento
  console.log("Formulário enviado!"); // "submit" => Computa um evento quando os dados de um formulário são enviados para o servidor, acionado por callback(função anônima) que será executado quando o evento ocorrer
});

// Propagação de eventos => Propaga eventos aos elementos filhos
document.querySelector("#elementoPai").addEventListener("click", () => {
  console.log("Clique capturado no pai!"); // Os eventos no elemento pai propagam no filho
});

document.querySelector("#elementoFilho").addEventListener("click", (event) => {
  event.stopPropagation(); // "stopPropagation" => Impede a propagação do evento para elementos pais
  console.log("Clique capturado no filho!");
});

document.querySelector("#meuLink").addEventListener("click", (event) => {
  event.preventDefault(); // "preventDefault" => Desabilita o comportamento padrão do elemento
  console.log("Clicou no link!");
});

// Delegação de eventos => Atribuir ouvintes a elementos pai, simplificando o tratamento de eventos em elementos filhos
document.querySelector("#elementoPai").addEventListener("click", (event) => {
  if (event.target.matches(".classeDosFilhos")) {
    console.log("Evento delegado para o filho!"); // "event.target.matches" => Verifica se o alvo do evento "event.target.matches" corresponde aos elementos com a classe definida
  }
});