let a = parseInt(prompt('Digite o valor do coenficiente a: '));
let b = parseInt(prompt('Digite o valor do coenficiente b: '));
let c = parseInt(prompt('Digite o valor do coenficiente c: '));

let delta = b**2 - 4 * a * c; 
 
if (delta > 0) {
    x1 = (-b + Math.sqrt(delta)) / 2 * a;
    x2 = (-b - Math.sqrt(delta)) / 2 * a;
    alert(`As raízes são ${x1} e ${x2}`); 
}
else if (delta == 0) {
    x1 = -b / 2 * a;
    alert(`A raiz é ${x1}`);
}
else {
    alert('Não existe raiz real');
}
