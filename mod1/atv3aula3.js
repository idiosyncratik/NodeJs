const entrada = require('prompt-sync')({ sigint: false });

let agua = entrada("Digite o valor da conta de água: ");
agua = Number(agua);
let energia = entrada("Digite o valor da conta de energia: ");
energia = Number(energia);
let apt = entrada("Digite a quantidade de apartamentos: ");
apt = Number(apt);

soma = (agua+energia);
rateio = (soma/apt);
console.log("Cada responsável deverá pagar um valor de: " + (rateio) + ",00 R$.");

