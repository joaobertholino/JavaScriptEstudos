// DOM => Document Object Model => Manipular elementos HTML por meio do JavaScript

// Forma antiga de selecionar elementos
// "getElementsByTagName" => Retorna uma "HTML Collection" de acordo com a "tag" definida
let tituloTag = document.getElementsByTagName("h1");
console.log(tituloTag[0]); // Imprimindo no console apenas o primeiro elemento HTML com índice zero "0"

// "getElementById" => Retorna apenas o primeiro elemento de acordo com o "id" definido
let tituloId = document.getElementById("tituloId1");
console.log(tituloId);

// "getElementsByClassName" => Retorna todos os elementos que possuem a mesma "classe"
let tituloClass = document.getElementsByClassName("tituloClass");
console.log(tituloClass[0]);

// Forma moderna de selecionar elementos
// "querySelector" => Retorna apenas o primeiro elemento com base em um seletor CSS, podendo ser por "tag", "id" ou "class"
let querySelectorTag = document.querySelector("h1");
console.log(querySelectorTag);

let querySelectorId = document.querySelector("#tituloId1");
console.log(querySelectorId);

let querySelectorClass = document.querySelector(".tituloClass");
console.log(querySelectorClass);

// "querySelectorAll" => Retorna todos os elementos que corresponderem ao seletor definido
let querySelectorTagAll = document.querySelectorAll("li");
console.log(querySelectorTagAll);

let querySelectorClassAll = document.querySelectorAll(".tituloClass");
console.log(querySelectorClassAll);

// Alterar conteúdo do elemento
let titleTextContent = document.querySelector("#tituloId2");
titleTextContent.textContent = "Alterando o conteúdo textual do titulo utilizando 'textContent'"; // "textContent" => Modifica o conteúdo textual do elemento sem retornar as tags do mesmos, sendo o método mais recomendado

let titleInner = document.querySelector("#tituloId1");
titleInner.innerHTML = "Alterando o conteúdo textual do titulo utilizando 'innerHTML'"; // "innerHTML" => Modifica o conteúdo HTML. Use com cuidado para evitar problemas de segurança "Cross-Site Scripting"(XSS)

// Criar elementos
let novoParagrafo = document.createElement("p"); // "createElement" => Cria uma instância do elemento para a tag especificada
console.log(novoParagrafo);

let textContent = document.createTextNode("Conteúdo textual criado utilizando 'createTextNode' e inserido no HTML utilizando 'appendChild'"); // "createTextNode" => Cria uma string de texto a partir do valor especificado
novoParagrafo.appendChild(textContent); // "appendChild" => Método JavaScript que adiciona um nó (como um elemento HTML) como filho de outro nó, especificando onde ele deve ser inserido no DOM

let meuBody = document.querySelector("body"); // Inserindo elemento no "body"
meuBody.appendChild(novoParagrafo);

let meuContainer = document.querySelector("#container"); // Criando elemento e inserindo em uma "div"
let novoElemento = document.createElement("span");

novoElemento.appendChild(document.createTextNode("Meu 'span' inserido na 'div'"));
meuContainer.appendChild(novoElemento);

// Removendo elementos
let removeTitle = document.querySelector("#tituloId4"); // Elemento a ser removido
removeTitle.remove(); // "remove" => Remove um elemento

let meuContainer2 = document.querySelector("#container"); // Elemento pai
let meuParagrafo = document.querySelector("#container p"); // Elemento filho
meuContainer2.removeChild(meuParagrafo); // "removeChild" => Remove o elemento filho

// Adicionando elementos
let meuElemento = document.createElement("div"); // "createElement" => Criando elemento
meuElemento.classList = "div-criada"; // "classList" => Atribui uma classe para o elemento

let meuElemento3 = document.querySelector("#container");
meuElemento3.appendChild(meuElemento); // "appendChild" => Adicionando elemento filho

let meuElemento4 = document.createElement("div");
meuElemento4.classList = "div-before";

let elementInsertBefore = document.querySelector("#container .div-criada");
meuContainer.insertBefore(meuElemento4, elementInsertBefore); // "insertBefore" => Insere um elemento antes de outro

// Trocando elementos
let elemento1 = document.createElement("h3");
elemento1.classList = "class-test"; // "classList" => Propriedade de objetos que fornece métodos para manipular as classes de um elemento HTML de maneira flexível e segura

let texto = document.createTextNode("Texto inserido via DOM JavaScript");
elemento1.appendChild(texto);
console.log(elemento1);

let title = document.querySelector("#tituloId1"); // Selecionando o elemento a ser trocado
console.log(title);

let father = title.parentNode; // "parentNode" => Selecionando o pai do elemento
father.replaceChild(elemento1, title); // "replaceChild(novoElemento, antigoElemento)" => Substituindo elemento

// Alterando atributos
let title2 = document.querySelector("#tituloId2");
title2.setAttribute("class", "classTest"); // "setAttribute" => Usado para definir o valor de um atributo de um elemento DOM. Se o atributo não existir, ele será criado
console.log(title2);

let btnTest = document.querySelector(".idTest");
btnTest.setAttribute("disabled", "disabled"); // Desabilitando a função de "click" no botão

let minhaLista = document.querySelector("#lista");
minhaLista.removeAttribute("id"); // "removeAttribute" => Usado para remover um atributo de um elemento DOM

// Alterando CSS com JavaScript
let title3 = document.querySelector(".class-test"); // Selecionando elemento
title3.style.color = "red"; // Atribuindo a cor "red" ao elemento, toda estilização feita via DOM será "inline", sendo priorizada na estilização
title3.style.backgroundColor = "yellow"; // "background-color: ;" => "backgroundColor =" => Em JavaScript sempre se utiliza a notação de "camelCase"

let title4 = document.querySelector("#tituloId3");
title4.style.cssText = "color: blue; background-color: pink;"; // "cssText" => Permite adicionar vários estilos diferentes ao mesmo elemento, sem a necessidade de utilizar a notação de "camelCase"

// Propriedades do objeto "document"
// "body" => O elemento <body> do documento.
console.log(document.body);

// "links" => Uma coleção de todos os elementos <link> no documento.
console.log(document.links);
console.log(document.links[0]); // Retorna um link com base no índice declarado
document.links[0].textContent = "Alterando conteúdo textual do primeiro link"; // Alterando conteúdo do elemento

// "URL" => A URL do documento.
console.log(document.URL);

// "title" => O título do documento.
console.log(document.title);

document.title = "Alterando o titulo da pagina"; // Alterando o titulo da pagina
console.log(document.title);

// Outras propriedades do objeto "document"
// "activeElement" => O elemento atualmente ativo no documento. O elemento ativo é o elemento com o foco do teclado.
// "all" => Uma coleção de todos os elementos no documento.
// "anchors" => Uma coleção de todos os elementos <a> no documento.
// "characterSet" => O conjunto de caracteres usado pelo documento.
// "cookie" => O cookie associado ao documento.
// "doctype" => O tipo de documento do documento.
// "documentElement" => O elemento <html> do documento.
// "domain" => O domínio do documento.
// "embeds" => Uma coleção de todos os elementos <embed> no documento.
// "forms" => Uma coleção de todos os formulários no documento.
// "images" => Uma coleção de todas as imagens no documento.
// "implementation" => Uma interface que fornece informações sobre a implementação do DOM no navegador.
// "inputEncoding" => O código de codificação de entrada usado pelo documento.
// "lastModified" => A data e hora em que o documento foi modificado pela última vez.
// "location" => O objeto Location que representa a localização do documento.
// "name" => O nome do documento.
// "namespaces" => Uma coleção de todos os espaços de nomes no documento.
// "origin" => A origem do documento.
// "plugins" => Uma coleção de todos os plugins no documento.
// "querySelector()" => Retorna um elemento que corresponde a uma expressão CSS.
// "querySelectorAll()" => Retorna uma coleção de elementos que correspondem a uma expressão CSS.
// "readyState" => O estado de carregamento do documento.
// "referrer" => O URL do documento de referência.
// "scripts" => Uma coleção de todos os elementos <script> no documento.
// "styleSheets" => Uma coleção de todos os elementos <style> no documento.
// "webkitHidden" => Indica se o documento está oculto.

// Eventos => Mapeamento de ações dos usuários
// "onload" => É um evento acionado quando uma página web é completamente carregada no navegador, permitindo que ações sejam executadas após o carregamento completo
window.onload = function () {
  console.log("Carregou o DOM"); // Só é executado após todo o HTML ter carregado
};
console.log("Carregou o JS");

// "click" => Ocorre quando um elemento, como um botão ou um link, é clicado pelo usuário, desencadeando a execução de ações associadas a esse elemento
let myButton1 = document.querySelector("#btn"); // Selecionando o elemento a receber o evento
console.log(btn);

btn.addEventListener("click", function () {
  console.log(this);
  this.style.cssText = "background-color: red; border: 1px solid black;";
});

// "dblclick" => Ocorre quando um elemento é clicado duas vezes rapidamente pelo usuário, desencadeando a execução de ações associadas a esse elemento após um duplo clique
let myButton2 = document.querySelector("#btn"); // Selecionando o elemento a receber o evento
console.log(btn);

btn.addEventListener("dblclick", function () {
  console.log(this);
  this.style.cssText = "width: 70vw; height: 5vh;";
});

// "mouseover" => Acionado quando o ponteiro do mouse entra em um elemento. É usado para executar ações quando o usuário passa o mouse sobre um elemento
let title5 = document.querySelector("#tituloId3"); // Selecionando o elemento

title5.addEventListener("mouseover", function () {
  this.style.backgroundColor = "red"; // Ao passar o mouse por cima do elemento, irá alterar a cor do background para "red"
});

// Fazendo com que outros conteúdos apareçam na tela ao passar com o mouse por cima 
title5.addEventListener("mouseover", function () {
  let legenda = document.querySelector("#hide");
  legenda.classList.remove("subtitle")
});

// "mouseout" => Acionado quando o ponteiro do mouse sai de um elemento. É usado para executar ações quando o usuário remove o mouse de um elemento
title5.addEventListener("mouseout", function () {
  this.style.backgroundColor = "pink" // Ao retirar o mouse de cima do elemento, irá alterar a cor do background para "pink"
});

// Fazendo com que outros conteúdos sumam da tela ao remover o mouse de cima de um elemento
title5.addEventListener("mouseout", function () {
  let legenda = document.querySelector("#hide");
  legenda.classList.add("subtitle");
});

// "keydown" => Acionado quando uma tecla é pressionada no teclado
document.addEventListener("keydown", function (event) {
  // Apenas executa o bloco condicional de a tecla pressionada for "Enter"
  if (event.key === "Enter") {
    console.log(`Pressionou a tecla: ${event.key}`);
  };

  console.log("teste"); // Retorna no console sempre que qualquer tecla é pressionada
  console.log(event); // Retorna no console todas a informações do evento
  console.log(event.key); // Retorna no console apenas qual tecla foi pressionada
});

// "keyup" => Acionado quando uma tecla é liberada no teclado
document.addEventListener("keyup", function (event2) {
  if (event2.key === "Enter") {
    console.log(`Soltou a tecla: ${event2.key}`);
  };
});

// "keypress" => Acionado quando uma tecla é pressionada e liberada no teclado
document.addEventListener("keypress", function (event3) {
  console.log(`Pressionou e liberou a tecla: ${event3.key}`);
});