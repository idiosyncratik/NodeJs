const entrada = require('prompt-sync')({ sigint: false });

let dias = entrada("Digite quantos dias de atraso: ");
dias = Number(dias);
multa = (dias*1.50);
console.log("Sua multa está no valor de: " + (multa) + ",00 R$.");

