class Produto {
    nome: string;
    preco: number;

    constructor(nome: string, preco: number) {
        this.nome = nome;
        this.preco = preco;
    }
}

class Pedido {
    lista_de_produtos: Produto[]; 

    constructor() {
        this.lista_de_produtos = []; 
    }

    adicionarProduto(produto: Produto): void {
        this.lista_de_produtos.push(produto);
    }

    removerProduto(produto: Produto): void {
        this.lista_de_produtos = this.lista_de_produtos.filter(p => p !== produto);
    }

    calcularTotal(): number {
        return this.lista_de_produtos.reduce((total, produto) => total + produto.preco, 0);
    }

}

const produto1 = new Produto("Livro", 50.0);
const produto2 = new Produto("Marca Página", 5.0);

const pedido = new Pedido();
pedido.adicionarProduto(produto1);
pedido.adicionarProduto(produto2);
console.log("Total do pedido:", pedido.calcularTotal());
pedido.removerProduto(produto2);
console.log("Total do pedido após remoção:", pedido.calcularTotal());

class Livro {
    titulo: string;
    autor: string;

    constructor(titulo: string, autor: string) {
        this.titulo = titulo;
        this.autor = autor;
    }
}

class Biblioteca {
    lista_de_livros: Livro[];

    constructor() {
        this.lista_de_livros = [];
    }

    adicionarLivro(livro: Livro): void {
        this.lista_de_livros.push(livro);
    }

    buscarLivroPorTitulo(titulo: string): Livro | undefined {
        return this.lista_de_livros.find(livro => livro.titulo === titulo);
    }
}

const livro1 = new Livro("Hannibal Rising", "Thomas Harris");
const livro2 = new Livro("No Longer Human", "Osamu Dazai");

const biblioteca = new Biblioteca();
biblioteca.adicionarLivro(livro1);
biblioteca.adicionarLivro(livro2);

const resultadoBusca = biblioteca.buscarLivroPorTitulo("No Longer Human");
if (resultadoBusca) {
    console.log(`Livro encontrado: ${resultadoBusca.titulo} - ${resultadoBusca.autor}`);
} else {
    console.log("Livro não encontrado.");
}