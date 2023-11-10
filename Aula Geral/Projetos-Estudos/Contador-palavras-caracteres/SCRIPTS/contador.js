// Criando constantes para selecionar os elementos
const input = document.querySelector("#input");
const counter = document.querySelector(".result");
const toggleButton = document.querySelector("#counter-init");

// Criando variável que define qual modo esta definido => Caracteres ou Palavras
let mode = null;

// Adicionando um evento para alterar o modo
toggleButton.addEventListener("click", () => {
  if (mode === null) {
    mode = "words";
    toggleButton.textContent = "Contar caracteres";
  } else if (mode === "words") {
    mode = "characters";
    toggleButton.textContent = "Contar palavras";
  } else {
    mode = "words";
    toggleButton.textContent = "Contar caracteres";
  }

  input.dispatchEvent(new Event("input")); // Altera o modo de resultado junto ao modo de contagem
});

// Adicionando evento ao input e exibindo o resultado na tela
input.addEventListener("input", () => {
  let count = 0;

  if (mode === null) {
    count = null;
    counter.textContent = "Selecione um modo";
  } else if (mode === "words") {
    const words = input.value.trim().split(/\s+/); // Divide a string em um array baseado nos espaços existentes usando um regex
    count = input.value.trim() === "" ? 0 : words.length; // Se o valor for uma string vazia, zera o contador
    counter.textContent = `${count} palavra(s)`;
  } else {
    mode = "characters";
    const characters = input.value.length;
    count = characters;
    counter.textContent = `${count} caractere(s)`;
  }
});
