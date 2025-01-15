let lista = [];

let qtdNumeroo = parseInt(prompt("Digite a quantidade de números: "));
let count = 0;
for (let i = 0; i < qtdNumeroo; i++) {
    let numero = parseInt(prompt("Digite um número: "));
    lista.push(numero);
    
    if (i >= 1) { 
        if (lista[i] > lista[i-1]) {
            count++;
        }    
    }
}

alert(`Os números em ordem crescente são ${count}`)