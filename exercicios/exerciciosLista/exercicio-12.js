let lista = [0,0,1,1,2,3,3,4,4,5,5,6,6,7,7,8,8,9,9];
let count;
let valorUnico;

for (let i = 0; i < lista.length; i++) {
    count = 0
    for (let j = 0; j < lista.length; j++) {
        if (lista[i] == lista[j]) {
            count++;
        }
    }
    if (count == 1) {
        valorUnico = lista[i];
    }
}

alert(valorUnico);
