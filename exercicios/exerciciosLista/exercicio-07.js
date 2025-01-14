let phase = prompt("Digite uma frase: ").toLowerCase();

let invertPhase;

invertPhase = phase.split("");
let count = 0;

for(let i = 0 ; i < invertPhase.length; i++){
    if (phase[i] != invertPhase[phase.length - 1 - i]) {   
        count++;
    }
}

if (count == 0) {
    alert("É um palíndromo");
} else {
    alert("Não é um palíndromo");
}