const entrada = require('prompt-sync')({ sigint: false });

let nota1 = entrada("Digite a sua primeira nota: ");
nota1 = Number(nota1);
let nota2 = entrada("Digite a sua segunda nota: ");
nota2 = Number(nota2);
let nota3 = entrada("Digite a sua terceira nota: ");
nota3 = Number(nota3);

soma = (nota1+nota2+nota3);
media = (soma/3)
console.log("Sua média aritmética é: " + (media));
