const entrada = require('prompt-sync')({sigint: false});

    let n1 = entrada ("digite o primeiro numero: ");
    n1 = Number(n1);
    let n2 = entrada ("digite o segundo numero: ");
    n2 = Number(n2);

function soma(n1, n2) {
    return n1+n2;
}
console.log(soma(n1,n2));