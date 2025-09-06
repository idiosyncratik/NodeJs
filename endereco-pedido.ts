// primeiro eu crio um "molde" chamado Endereco.
// esse molde vai ter três espaços: um pra guardar a rua, um pro número e outro pra guardar a cidade.
class Endereco {
    rua: string; // espaço pra guardar o nome da rua
    numero: number; // espaço pra guardar o número da casa
    cidade: string; // espaço pra guardar o nome da cidade

    // sempre que eu criar um novo endereço com "new", o constructor já vai pedir rua, numero e cidade.
    constructor(rua: string, numero: number, cidade: string) {
        // o "this" é só uma forma de dizer:
        // "guarda esse valor dentro deste Endereco que eu tô criando agora".
        this.rua = rua;       
        this.numero = numero; 
        this.cidade = cidade; 
    }

    // esse método só devolve o endereço já formatado bonitinho
    formatar(): string {
        return `${this.rua}, Nº ${this.numero} - ${this.cidade}`;
    }
}

// aqui eu criei dois endereços diferentes usando "new" (que cria um novo objeto)
const end1 = new Endereco("Rua da Guia", 142, "Recife");
const end2 = new Endereco("Cais do Apolo", 222, "Recife");

// se eu mandar imprimir, ele mostra os endereços formatados
console.log(end1.formatar()); 
console.log(end2.formatar());


// aqui eu crio um "molde" chamado Pedido.
// esse molde vai ter dois espaços: um pra guardar o id e outro pro total.
class Pedido {
    id: string;
    total: number;

    // o pedido começa sempre com um id e o total zerado
    constructor(id: string) {
        this.id = id;   
        this.total = 0; // todo pedido nasce com total 0
    }

    // esse método é só pra somar valores no pedido
    adicionarValor(v: number): void {
        this.total += v; // aqui eu pego o total e somo o valor passado
    }
}

// criei um pedido novo com id "PDD001"
const pedido1 = new Pedido("PDD001");

// agora eu fui adicionando valores ao pedido
pedido1.adicionarValor(50);
pedido1.adicionarValor(25);

// no fim, o total já foi somado automaticamente
console.log(`Pedido ${pedido1.id} - Total: R$ ${pedido1.total}`);
