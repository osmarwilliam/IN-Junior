function dizerOla() {
    console.log('Olá, mundo!');
}

dizerOla(); // Olá, mundo!
dizerOla(); // Olá, mundo!

function saudacao(nome = 'Mundo') {
    console.log(`Olá, ${nome}!`);
}
  
saudacao(); // Olá, Mundo!

pessoa = {
    nome: 'João',
    idade: 25,
    altura: 1.80,
    estudante: true,
    peso: 80,
    endereco: {
        rua: 'Rua 1',
        numero: 10
    },
    habilidade: ['javascript', 'html', 'css']
}

function mostrarPessoa(dados) {
    console.log(`Nome: ${dados.nome}`);
    console.log(`Nome: ${dados.idade}`);
    console.log(`Nome: ${dados.estudante}`);
    console.log(`Nome: ${dados.altura}`);
}

mostrarPessoa(pessoa);

/*
PARÂMETROS:
    - Input / entrada de dados
    - Valores que a função recebe
    - A ordem dos parâmetros na chamada da função importa
    - Podem possuir valores padrão (que ficam no fim da lista de parâmetros)
    - Podem ser passados como objeto (desestruturação de objetos)
*/

let resultado = soma(3,5) // 8

function soma(a, b) {
    return a + b;
}

// Métodos

let pessoa = {
    nome :'joao',
    idade : 19,
    dizerOla() {
        console.log('Olá, ' + this.nome);
    }
}

pessoa.dizerOla(); // Olá, joao

let operacao = soma;
operacao(3,8) // 11

// funcoes anonimas

let dizerTchau = function() {
    console.log('Tchau!');
}

dizerTchau(); // Tchau! 

pessoa.dizerTchau = dizerTchau;

pessoa.dizerTchau(); // Tchau!

// arrow function 

let dizerOi = () => {
    console.log('Oi!');
} 

let multiplicar = (a, b) => a * b;

let dizerNome = (nome) => {
    return 'olá' + nome
}

let outroDizerNome = nome => 'Olá' + nome;

function dividir (a, b) {
    return a / b;
}

function operacao(a, b, operacao) {
    return operacao(a, b);
}

subtracao = operacao(6, 2, (a, b) => a - b); // 4 

operacao(3,2, multiplicar); // 6

// forEach - percorre o array e executa a função passada como parâmetro para cada elemento

numeros = [1, 2, 3, 4, 5];

numeros.forEach((numero, InputDeviceInfo, numeros) => {
    console.log(`Número: ${numero} Indice: ${indice} Array de números: ${numeros}`);
})

numeros.forEach((numero) => console.log(numero + 1));

// callback functions:

// map - percorre o array e retorna um novo array com os valores alterados

// filter - percorre o array e retorna um novo array com os valores que passarem no teste da função passada como parâmetro

// sort - ordena o array de acordo com a função passada como parâmetro

// reduce - executa uma função para cada elemento do array, resultando num único valor de retorno

