// "setTimeout" - "setInterval"
console.log("Código antes do SetTimeout"); // Código síncronos

// "SetTimeout" => Permite a execução de uma função ou trecho de código após um atraso de tempo especificado
// Código assíncrono => Será executado somente a após o tempo declarado, não interferindo na execução do resto do código
setTimeout(function () {
  console.log("Testando o 'setTimeout'");
}, 200000); // "1s" = "1000ms"

console.log("Código depois do SetTimeout"); // Código síncronos

// "setInterval" =>  Executa repetidamente uma função ou trecho de código em intervalos regulares de tempo especificados
setInterval(function () {
  console.log("Testando o 'setInterval'");
}, 100000); // Caso seja definido um tempo muito curto e ações muito extensas, ocorrera um consumo de memoria muito grande podendo travar o navegador do usuário

// "clearTimeout" - "clearInterval"
let x = 0;

// Encapsulando o "setTimeout" em uma variável chamada "myTimer" para poder possar ele como parâmetro para o "clearTimeout()"
let myTimer = setTimeout(function () {
  console.log("O 'x' é zero");
}, 1500);

x = 5;

// "clearTimeout" => Cancela a execução de uma função agendada para rodar após um atraso usando "setTimeout"
if (x > 0) {
  clearTimeout(myTimer);
  console.log("O 'x' passou de zero");
}

// Encapsulando o "setInterval" em uma variável chamada "myInterval" para poder possar ele como parâmetro para o "clearInterval()"
let myInterval = setInterval(function () {
  console.log("imprimindo 'setInterval'");
}, 500);

// Interrompe a execução repetitiva de uma função programada para rodar em intervalos regulares usando "setInterval"
setTimeout(function () {
  console.log("Não precisamos mais repetir!");
  clearInterval(myInterval);
}, 1500);
