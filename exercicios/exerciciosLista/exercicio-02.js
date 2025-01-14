let res;
do {
    let number = parseInt(prompt("Digite um número: "));
    alert(`O fatorial do ${number} é ${fatorial(number)}`);
    res = prompt("Deseja continuar? (S/N)");
    res = res.toLowerCase();
} while (res == 's')

function fatorial(num) {
    if (num == 0) {
        return 1;
    }
    else {
        return num * fatorial(num - 1);
    }
}