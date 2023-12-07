const inputPeso = document.querySelector("#peso");
const inputAltura = document.querySelector("#altura");
const btnCalc = document.querySelector("#calcular");
const result = document.querySelector("#resultado");
const regexString = /^[a-zA-Z\s]+$/;

const calc = (x, y) => {
  return x.value / (y.value * 2);
};

btnCalc.addEventListener("click", () => {
  if (regexString.test(inputPeso.value) || regexString.test(inputAltura.value)) {
    result.textContent = "Valor invalido!";
    result.style.color = "red"
    setTimeout(() => {
      window.location.reload();
    }, 2000); // 2000ms => 2s
  } else {
    let resultado = calc(inputPeso, inputAltura);
    result.textContent = resultado;
  }
});
