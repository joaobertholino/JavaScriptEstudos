// Exercicio 1: Criar script que imprima "Olá, Mundo!" no console
console.log("Olá, Mundo!");

// Exercicio 2: Dado o valor de uma string "1234, converta-o em um numero e exiba o tipo da variavel no console"
const minhaString = "1234";
console.log(typeof minhaString);

const meuNumber = Number(minhaString);
console.log(typeof meuNumber);

// Exercicio 3: Dado uma string com o valor: "JavaScript é incrivel", escreva um codigo que exiba quantos caracteres e palavras tem na frase
const jsIncrivel = "JavaScript é incrível";

const qntCaracteres = jsIncrivel.length; // Quantidade de caracteres
console.log(`O numero de caracteres é: ${qntCaracteres}`);

const qntPalavras = jsIncrivel.split(" ").length; // Quantidade de palavras
console.log(`O numero de palavras é: ${qntPalavras}`);

// Exercicio 4: Crie um array com cinco nomes, use um loop for para imprimir cada nome no console
const nomes = ["João", "Nicolas", "Ellen", "Matheus", "Adriano"];

for (let i = 0; i < nomes.length; i++) {
  console.log(nomes[i]);
}

// Exercicio 5: Crie uma função que aceita uma string representando um horário no formato de 24 horas (por exemplo, "14:30"). A função deve retornar uma string que converta o horário para o formato de 12 horas (por exemplo, "2:30 PM").
const converterHorario = (horario24) => {
  const [hora, minuto] = horario24.split(":");
  const hora12 = hora % 12 || 12;

  if (hora >= 12) {
    periodo = "PM";
  } else if (hora < 12) {
    periodo = "AM";
  }

  console.log(`${hora12}:${minuto}:${periodo}`);
};

converterHorario("00:00");
converterHorario("12:00");
