// Fazendo a seleção dos elementos
const display = document.querySelector("#displayInput"); // "querySelector" => Seleciona apenas o primeiro elemento com base no seletor (.classe - #id)
const botãoIgual = document.querySelector(".igual");
const botãoPonto = document.querySelector(".ponto");
const botõesNumeros = document.querySelectorAll(".num"); // "querySelectorAll" => Seleciona todos os elementos com o mesmo seletor (.classe - #id)
const botõesOperadores = document.querySelectorAll(".operador");

// Variaveis de escopo global => Executar a manutenção dos estados da calculadora
let operaçãoAtual = ""; // Oque está sendo executado no momento
let operador = null; // Inicialmente sem operadores definidos
let valorAnterior = ""; // Valor que foi calculado anteriormente
let calculando = false; // Responsavel por saber se o usuario está executando a operação

// Funções
const atualizaDisplay = () => {
  display.value = operaçãoAtual; // Atualiza o display do input
};

// "insereNumero" => Permite ver os numeros na tela do usuario
const insereNumero = (event) => {
  if (calculando) {
    operaçãoAtual = event.target.textContent; // Reseta o input de resultado, iniciando uma nova operação
    calculando = false;
  } else {
    operaçãoAtual += event.target.textContent; // Não ira resetar o input de resultado, apenas dando continuidade a operação atual
  }

  atualizaDisplay();
};

const inserePonto = () => {
  if (operaçãoAtual.indexOf(".") === -1) {
    operaçãoAtual += "."; // "indexOf" => Procura algum indice de "." na string, se não tiver, o resultado é "-1"
    atualizaDisplay(); // Impede que seja inserido mais de um "." na operação podendo gerar um bug
  }
};

const insereOperador = (event) => {
  if (operaçãoAtual !== "") {
    if (!calculando) {
      if (operador !== null) {
        calcula();
      }
      valorAnterior = operaçãoAtual;
      operaçãoAtual = "";
    }
    operador = event.target.textContent;
  }
};

const calcula = () => {
  let resultado = null;
  const operandoAnterior = parseFloat(valorAnterior);
  const operandoAtual = parseFloat(operaçãoAtual);

  switch (operador) {
    case "+":
      resultado = operandoAnterior + operandoAtual;
      break;
    case "-":
      resultado = operandoAnterior - operandoAtual;
      break;
    case "*":
      resultado = operandoAnterior * operandoAtual;
      break;
    case "/":
      resultado = operandoAnterior / operandoAtual;
      break;
  }

  operaçãoAtual = String(resultado);
  valorAnterior = operaçãoAtual;
  calculando = true;
  atualizaDisplay();
};

// Eventos
botãoPonto.addEventListener("click", inserePonto); // Adiciona o evento que computa o click do usuario, em seguida, insere "."
botõesNumeros.forEach((botao) => botao.addEventListener("click", insereNumero)); // Percorre todos os elementos em nó e computa um click inserindo o respectivo numero
botõesOperadores.forEach((botao) => botao.addEventListener("click", insereOperador));
botãoIgual.addEventListener("click", calcula);

// 3:15:10 => Continuar a documentar a explicação da aula