// CALCULADORA SIMPLES 

const prompt = require('prompt-sync')();

// função principal onde tudo acontece
function main() {
console.log("~~~~~~~~ CALCULADORA ~~~~~~~~~");
console.log("Operações: +, -, *, /");
console.log("Digite 'sair' para encerrar");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");

// vou usar um while para ficar repetindo até o usuário querer sair
let executando = true;
    
while (executando) {
// primeiro pergunto qual operação quer fazer
let operacao = prompt("Qual operação? (+, -, *, /) ou 'sair': ");
        
// se digitar 'sair', o programa para
if (operacao === "sair") {
executando = false;
console.log("Obrigada por usar a calculadora!");
break; // saio do loop
}
        
// verifico se a operação é válida
// tem que ser +, -, * ou /
if (operacao !== "+" && operacao !== "-" && operacao !== "*" && operacao !== "/") {
console.log("Operação inválida! Use apenas +, -, * ou /");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
continue; // volto para o início do loop
}
        
// agora peço os dois números para calcular
let numero1 = Number(prompt("Primeiro número: "));
let numero2 = Number(prompt("Segundo número: "));
        
// variável para guardar o resultado
let resultado;
        
// aqui faço a conta conforme a operação escolhida
if (operacao === "+") {
resultado = numero1 + numero2;
} 
else if (operacao === "-") {
resultado = numero1 - numero2;
}
else if (operacao === "*") {
resultado = numero1 * numero2;
}
else if (operacao === "/") {
// não pode dividir por zero.
if (numero2 === 0) {
console.log("Não dá para dividir por zero.");
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
continue; // volto para o início sem calcular
}
resultado = numero1 / numero2;
}
        
// mostro o resultado bonitinho
console.log(`Resultado: ${numero1} ${operacao} ${numero2} = ${resultado}`);
console.log("~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~");
}
}

// aqui é onde tudo começa
main();