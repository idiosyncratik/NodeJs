// primeiro eu crio um "molde" chamado Cliente.
// esse molde vai ter dois espaços: um pra guardar o nome e outro pro CPF.
class Cliente {
    nome: string; // espaço pra guardar o nome
    cpf: string;  // espaço pra guardar o CPF

    // esse aqui é o "constructor". 
    // ele serve pra quando eu quiser criar um novo Cliente.
    // eu falo qual é o nome e qual é o CPF e ele já guarda dentro do objeto.
    constructor(nome: string, cpf: string) {
        // o "this" é só uma forma de dizer:
        // "guarda esse valor dentro deste Cliente que eu tô criando agora".
        this.nome = nome;
        this.cpf = cpf;
    }

    // aqui eu criei uma função (chamada método) que faz o Cliente se apresentar.
    // quando eu chamar "saudar()", ele vai falar o nome e o CPF guardados.
    saudar(): void {
        console.log(`Olá, ${this.nome}! Seu CPF é ${this.cpf}.`);
    }
}

// agora eu vou criar dois clientes de verdade.
// o "new" é como se eu pegasse o molde e fabricasse um novo Cliente.
const cliente1 = new Cliente("Maria", "123.456.789-00"); // Cliente 1
const cliente2 = new Cliente("João", "987.654.321-00");  // Cliente 2

// e aqui eu peço pros dois se apresentarem.
cliente1.saudar(); // vai mostrar: Olá, Maria! Seu CPF é 123.456.789-00.
cliente2.saudar(); // vai mostrar: Olá, João! Seu CPF é 987.654.321-00.
