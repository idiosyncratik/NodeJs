const entrada = require('prompt-sync')({sigint: false});

let operacoes;
do {
    operacoes = entrada("Digite 1 para somar, 2 para subtrair, 3 para multiplicar e 4 para dividir: ");
} while (operacoes !== "1" && operacoes !== "2" && operacoes !== "3" && operacoes !== "4");

let num1 = Number(entrada("Digite o primeiro número: "));
let num2 = Number(entrada("Digite o segundo número: "));
let resultado;

if (operacoes === "1") {
    resultado = num1 + num2;
    console.log(`Resultado da soma: ${resultado}`);
} else if (operacoes === "2") {
    resultado = num1 - num2;
    console.log(`Resultado da subtração: ${resultado}`);
} else if (operacoes === "3") {
    resultado = num1 * num2;
    console.log(`Resultado da multiplicação: ${resultado}`);
} else if (operacoes === "4") {
        resultado = num1 / num2;
        console.log(`Resultado da divisão: ${resultado}`);
}
