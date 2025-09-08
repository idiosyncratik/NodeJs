const entrada = require('prompt-sync')({sigint: false});
const n = Number(console.log("Digite um número: "));

for (let i = 1; i <= n; i++) {
  console.log(i)
}