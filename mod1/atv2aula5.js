const entrada = require('prompt-sync')({sigint: false});
let num = entrada(console.log("Digite um número: "));
num = Number(num);

for (let i = 0; i <= 10; i++) {
  console.log(num * i)
}