const time = [];

function adicionarJogador(nome, idade, posicao, pontuacao) {
    posicao = posicao.toLowerCase();
    const jogador = {
        nome : nome,
        idade : idade,
        posicao : posicao,
        pontuacao : pontuacao
    };
    time.push(jogador);
}

function buscarJogador(posicao) {
    posicao = posicao.toLowerCase();
    jogadores = [];
    console.log(jogadores) // 
    for (let i = 0; i < time.length; i++) {
        if (time[i].posicao === posicao) {
            jogadores.push(time[i].nome);
        }
    }
    if (jogadores.length === 0) {
        return 'Jogador não encontrado';
    }
    else {
        return jogadores;
    }
}

function listarTime(time){
    for (let i = 0; i < time.length; i++) {
        console.log(`Jogador ${i+1}: ${time[i].nome}`);
    }
}

function calcularPontuacaoMedia(time) {
    let pontuacaoMedia = 0;

    for (let i = 0; i < time.length; i++) {
        pontuacaoMedia += time[i].pontuacao;
    }
    return pontuacaoMedia / time.length;
}

let opcao;
let posicao;
let nome;
let idade;
do {
    opcao = prompt(`Escolha uma das Opções:\n1 - Adicionar Jogador\n2 - Buscar por Posição\n3 - Listar Time\n4 - Calcular Pontuação Média\n5 - Sair`);
    
    switch (opcao) {
        case '1':
            nome = prompt('Digite o nome do jogador: ');
            idade = parseInt(prompt('Digite a idade do jogador: '));
            posicao = prompt('Digite a posição do jogador: ');
            pontuacao = parseFloat(prompt('Digite a pontuação do jogador: '));
            adicionarJogador(nome, idade, posicao, pontuacao); 
            break;
        case '2':
            posicao = prompt('Digite a posição do jogador: ');
            alert(`${buscarJogador(posicao)}`);
            break;
        case '3':
            listarTime(time);
            break;
        case '4':
            alert(calcularPontuacaoMedia(time));
            break;
        case '5':
            alert('Saindo...');
            break;
    }

} while (opcao != '5');