const entrada = require('prompt-sync')({sigint: false});

let media = entrada(console.log("Digite a sua média: "));
media = Number(media);

if (media >= 9) {
    console.log("A");
} else if (media >= 7 && media < 9) {
    console.log("B");
} else if (media >= 5 && media < 7) {
    console.log("C");
} else if (media < 5) {
    console.log("D");
} else { 
    console.log("Média inválida.");
}
