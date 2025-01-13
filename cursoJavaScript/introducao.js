// JavaScript é uma linguagem de programação interpretada, de alto nível e de script
// Seu interpretador está presente nos navegadores
// uma linguagem script é responsável por manipular pequenas tarefas (API, DOM, etc)

console.log('Hello arquivo page.html!');

// Declaração de variáveis com var, let e const

var variavel = 15; // var e let são mutáveis, const não pode ser alterada
let a = 'olá'; // No geral o let é o mais usado, o var é raramente utilizado

// tipos de dados primitivos: number, string, boolean, null e undefined

variavel = 'oi';
console.log(typeof variavel);
variavel = true;
console.log(typeof variavel);
variavel = null; 
console.log(typeof variavel);
let teste;
console.log(typeof teste);

// JavaScript como linguagem de tipagem dinâmica

// Nomeação de variáveis: regras e padronização em camelCase

let variavelComum;
function FunctionJavaScript(){}

// Recursos de navegador: console.log, alert, prompt e confire

variavel = 10;
console.log('Numero = ' + variavel);
console.log(`Numero = ${variavel}`);

variavel = alert('Alerta!!');

variavel = prompt('Digite aqui: ');
console.log(`O usuário digitou: ${variavel}`);

variavel = confirm('Confirm');
console.log(`${variavel}`);


// Operadores básicos +, =, * e %
let n1 = 2;
let n2 = 3;
console.log(`${n1+n2} = soma`);
console.log(`${n1*n2} = multiplicação`);
console.log(`${n1/n2} = divisão`);
console.log(`${n1%n2} = resto da divisão`);

// ordem de operações e uso de parenteses

// operadores de atribuição +=, -=, x++ e x--

// Operadores de compração: ==, ===. !=, >, >=, <, <=

// Operadores lógicos: || (or), && (and) e ! (not)

// Conceito de curto-circuito com && e || 
let v1 = true;
console.log(v1 || 'Banana');
console.log(v1 && 'Banana');

let valor = null;
let valorVerdadeiro = valor || 100; // retorna o primeiro valor verdadeiro
valor = true;
valorVerdadeiro = valor && 100; // retorna o primeiro valor falso

// Estrutura if e else
let idade = 9;
if (idade <= 18) {
    console.log('Pode dirigir!')
}
else {
    console.log('Não pode dirigir!')
}


// Condicionais aninhadas e else if

let nome = 'Pedro';
if (idade <= 18) {
    if (nome == 'Pedro'){
        console.log(`Boa viagem, ${nome}`)
    }
    else if (nome === 'Rafael') {
        console.log(`Vai lá ${nome}`)
    }
    else {
        console.log('Pode dirigir!')
    }
}
else {
    console.log('Não pode dirigir!')
}

// Escopo em condicionais


// Operador ternário (condição ? valor1 : valor2)

let podeBeber = idade >= 18 ? true : false;

// Estrutura Switch case

let variavel; 

switch (variavel) {
    case 4:
        // codigo
        break;
    case "Banana":
        //
        break; 
}

n1 = parseInt(prompt("Digite um valor: "))
n2 = parseInt(prompt("Digite um valor: "))
let operacao = prompt("Digita operação: ")

switch (operacao) {
    case '+':
        console.log(n1 + n2)
        break;
    case '-':
        console.log(n1 - n2)
        break;
    case '*':
        console.log(n1 * n2)
        break;
    case '/':
        console.log(n1 % n2)
        break;  
}

// Estrutura de repetição while e do while

let cont = 0;

while (cont < 10) {
    if (cont == 5) {
        cont++;
        continue
    }
    console.log(cont);
    cont++;
    if (cont == 8) break;
}

do {
    console.log(cont);
    cont--;
} while (cont > 0)

// Diferenças de utilização entre while e do while

for(let i = 0; i < 10; i++) {
    console.log(i);
}

// Escopo em while (variáveis declaradas dentro do loop não são acessíveis fora)

// Comandos break e continue

// Estrutura for

