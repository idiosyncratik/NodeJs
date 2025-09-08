const entrada = require('prompt-sync')({sigint: false});

let num = entrada(console.log("Digite um número: "));
num = Number(num);
div = 2
resto = num % div
if (resto === 0) {
    console.log("O número é par");
} else {
    console.log("O número é impar");
}
