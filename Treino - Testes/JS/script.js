const button = document.querySelector("#button1");
const paragraph1 = document.querySelector("#paragrafo1");
const paragraph2 = document.querySelector("#paragrafo2");
const paragraph3 = document.querySelector("#paragrafo3");
const paragraph4 = document.querySelector("#paragrafo4");
const paragraph5 = document.querySelector("#paragrafo5");

button.textContent = "Calcular";

button.addEventListener("click", () => {
  const firstNumber = parseFloat(prompt("Digite o seu primeiro número:"));
  const secondNumber = parseFloat(prompt("Digite o seu segundo número:"));

  const addition = firstNumber + secondNumber;
  const subtraction = firstNumber - secondNumber;
  const multiplication = firstNumber * secondNumber;
  const division = firstNumber / secondNumber;
  const exponentiation = firstNumber ** secondNumber;

  paragraph1.textContent = `Adição: ${addition}`;
  paragraph2.textContent = `Subtração: ${subtraction}`;
  paragraph3.textContent = `Multiplicação: ${multiplication}`;
  paragraph4.textContent = `Divisão: ${division}`;
  paragraph5.textContent = `Potenciação: ${exponentiation}`;
});