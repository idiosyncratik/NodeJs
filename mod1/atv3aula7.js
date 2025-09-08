const entrada = require('prompt-sync')({sigint: false});

    let celsius = entrada ("Digite a temperatura em Celsius: ");
    celsius = Number(celsius);

function celsiusparafahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const fahrenheit = celsiusparafahrenheit(celsius) ;
console.log("A temperatura em", (celsius), "C° equivale a", (fahrenheit), "F°");