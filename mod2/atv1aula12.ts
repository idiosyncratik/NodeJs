// primeiro eu crio um "molde" chamado Aluno.
// esse molde vai ter dois espaços: um pra guardar o nome e outro pra matricula.
class Aluno {
    nome: string; // espaço pra guardar o nome
    matricula: string;  // espaço pra guardar a matricula

    // esse aqui é o "constructor". 
    // ele serve pra quando eu quiser criar um novo Aluno.
    // eu falo qual é o nome e qual é a matricula e ele já guarda dentro do objeto.
    constructor(nome: string, matricula: string) {
        // o "this" é só uma forma de dizer:
        // "guarda esse valor dentro deste Aluno que eu tô criando agora".
        this.nome = nome;
        this.matricula = matricula;
    }
}

class Turma {
    lista_de_alunos: Aluno[]; // array para armanezar objetos aluno.

    constructor() {
        this.lista_de_alunos = []; // a lista inicia vazia.
    }

    // aqui eu criei uma função (chamada método) para guardar o objeto aluno e adicionar na lista.
    adicionarAluno(aluno: Aluno): void {
        this.lista_de_alunos.push(aluno) // adiciona o aluno na lista.
    }

    listarAlunos(): void {
        console.log("Lista de alunos da turma:");
        this.lista_de_alunos.forEach((aluno) => {
            console.log(`Nome: ${aluno.nome}, Matrícula: ${aluno.matricula}`);
        });
        }
    }

// agora eu vou criar dois alunos de verdade.
// o "new" é como se eu pegasse o molde e fabricasse um novo Aluno.
const aluno1 = new Aluno("Maria", "MAT01234"); // Aluno 1
const aluno2 = new Aluno("João", "MAT56789");  // Aluno 2

// criando uma turma.
const turma = new Turma();

// adicionando alunos na turma.
turma.adicionarAluno(aluno1);
turma.adicionarAluno(aluno2);

// listando alunos da turma.
turma.listarAlunos;