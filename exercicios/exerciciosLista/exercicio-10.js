let fila = [];
let flag = true;
do {
    let opcao = prompt("Escolha uma das opções: \n1- Novo Cliente \n2- Atender Cliente \n3 - Sair")
    switch(opcao) {
        case '1':
            let nome = prompt('Digite o nome: ');
            fila.push(nome);
            break;
        case '2':
            fila.shift();
            break;
        case '3':
            flag = false;
            break;
        }
    for (let i = 0; i < fila.length; i++) {
        alert(`${i+1}ª ${fila[i]}`);
    }
} while (flag)
