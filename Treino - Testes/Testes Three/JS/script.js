const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const btnCalc = document.querySelector("#calcular");
const result = document.querySelector("#resultado");

const operation = () => {
  return Number(inputPeso.value) / Number(inputAltura.value) ** 2;
};

btnCalc.addEventListener("click", () => {
  result.textContent = operation();
});
