const buttonOne = document.querySelector("#button1");
const buttonTwo = document.querySelector("#button2");
const paragraph1 = document.querySelector("#paragrafo1");
const paragraph2 = document.querySelector("#paragrafo2");
const paragraph3 = document.querySelector("#paragrafo3");
const paragraph4 = document.querySelector("#paragrafo4");
const paragraph5 = document.querySelector("#paragrafo5");
const paragraph6 = document.querySelector("#paragrafo7");
const inputNumberOne = document.querySelector("#input1");
const inputNumberTwo = document.querySelector("#input2");

buttonOne.addEventListener("click", () => {
  if (inputNumberOne.value === "" || inputNumberTwo === "") {
    paragraph6.style.color = "red";
    paragraph6.textContent = "Insira valores para serem calculados";
  } else {
    const firstNumber = parseFloat(inputNumberOne.value);
    const secondNumber = parseFloat(inputNumberTwo.value);

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
    paragraph6.textContent = "Paragrafo de testes";
    paragraph6.style.color = "black";
  }
});

buttonTwo.addEventListener("click", () => {
  inputNumberOne.value = "";
  inputNumberTwo.value = "";

  paragraph1.textContent = "Paragrafo de testes";
  paragraph2.textContent = "Paragrafo de testes";
  paragraph3.textContent = "Paragrafo de testes";
  paragraph4.textContent = "Paragrafo de testes";
  paragraph5.textContent = "Paragrafo de testes";
  paragraph6.textContent = "Paragrafo de testes";
  paragraph6.style.color = "black";
});
