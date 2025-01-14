function verificarIdade(lista) {
    let arrayMenorIdade = [];
    let arrayMaiorIdade = [];
    let anoAtual = parseInt(prompt('Digite o ano atual: '))
    for(let i = 0; i < lista.length; i++) {
        let idade = anoAtual - lista[i];
        if(idade >= 18) {
            arrayMaiorIdade.push(lista[i]);
            console.log(`Pessoa ${i + 1} é maior de idade`);
        } else {
            arrayMenorIdade.push(lista[i]);
            console.log(`Pessoa ${i + 1} é menor de idade`);
        }
    }
    return [arrayMaiorIdade, arrayMenorIdade];
}

let anosNascimento = [1990, 2000, 2005, 2010, 2015, 2020, 1983, 1995, 2003, 2012];
let resultado = verificarIdade(anosNascimento);

let maiorIdade = resultado[0];
let menorIdade = resultado[1];

console.log(`Array maior idade: [${maiorIdade}]`);
console.log(`Array menor idade: [${menorIdade}]`);