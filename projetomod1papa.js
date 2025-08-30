// PROJETO MOD1

const prompt = require('prompt-sync')();

// preciso de arrays para guardar os nomes e votos
let nomesCardeais = []; // aqui vou colocar os nomes dos 5 cardeais
let votosCardeais = [0, 0, 0, 0, 0]; // começa com zero votos para cada
let totalVotos = 0; // contador de votos totais

// função principal que inicia tudo
function main() {
console.log("=== ELEIÇÃO DO PAPA ===");
console.log("Vamos cadastrar os 5 cardeais primeiro");
cadastrarCardeais(); // chama a função de cadastro
iniciarVotacao(); // depois inicia a votação
}

// função para cadastrar os cardeais
function cadastrarCardeais() {
let i = 0; // contador começa em zero
while (i < 5) { // enquanto não cadastrar 5 cardeais
let nome = prompt(`Digite o nome do cardeal ${i + 1}: `);
nomesCardeais.push(nome); // adiciona o nome no array
i++; // aumenta o contador
}
console.log("\nCardeais cadastrados com sucesso!");
}

// função que mostra o menu de votação
function mostrarMenu() {
console.log("\n~~~~ MENU DE VOTAÇÃO ~~~~");
// mostro cada cardeal com seu número
for (let i = 0; i < 5; i++) {
console.log(`${i + 1} - ${nomesCardeais[i]}`);
}
console.log("6 - Encerrar votação");
console.log("~~~~~~~~~~~~~~~~~~~~~~~");
}

// função que controla a votação
function iniciarVotacao() {
let continuar = true; // controle do loop
    
while (continuar) {
mostrarMenu(); // mostro o menu
        
let opcao = prompt("Digite o número do seu voto: ");
let numero = Number(opcao); // converto para número
        
if (numero >= 1 && numero <= 5) {
// se votou em algum cardeal (1 a 5)
votosCardeais[numero - 1]++; // aumento o voto dele
totalVotos++; // aumento o total de votos
console.log("Voto registrado!");
} 
else if (numero === 6) {
// se escolheu encerrar
continuar = false; // paro o loop
verificarResultados(); // verifico os resultados
}
else {
// se digitou algo errado
console.log("Opção inválida! Digite um número de 1 a 6.");
}
}
}

// função que verifica quem ganhou
function verificarResultados() {
console.log("\n~~~~ RESULTADOS ~~~~");

// mostro quantos votos cada um teve
for (let i = 0; i < 5; i++) {
console.log(`${nomesCardeais[i]}: ${votosCardeais[i]} votos`);
}
    
// calculo quantos votos são necessários para vencer
// preciso de 2/3 dos votos totais, arredondando para cima
let votosX2 = totalVotos * 2; // duas vezes o total de votos
let votosNecessarios = (votosX2 / 3) - ((votosX2 / 3) % 1); // vai me dar um resultado inteiro, sem números enormes com casas decimais
if (votosX2 % 3 !== 0) {
    votosNecessarios = votosNecessarios + 1; // se tiver resto, arredondo para cima
}

console.log(`\nTotal de votos: ${totalVotos}`);
console.log(`Votos necessários: ${votosNecessarios}`);
    
// verifico se alguém tem votos suficientes
let vencedor = false;
for (let i = 0; i < 5; i++) {
if (votosCardeais[i] >= votosNecessarios) {
console.log(`\n ${nomesCardeais[i]} FOI ELEITO PAPA! `);
vencedor = true;
break; // paro de procurar
}
}
    
// se ninguém ganhou, pergunto se quer nova votação
if (!vencedor) {
console.log("\nNinguém atingiu 2/3 dos votos");
let resposta = prompt("Fazer nova votação? (s/n): ");
        
if (resposta === 's') {
// zero todos os votos para começar de novo
for (let i = 0; i < 5; i++) {
votosCardeais[i] = 0;
}
totalVotos = 0;
console.log("\nNova votação iniciada!");
iniciarVotacao(); // começo tudo de novo
} else {
console.log("Fim da eleição!");
}
}
}

// aqui é onde o programa realmente começa
main();