let pessoa = {
    nome: 'João',
    idade: 25,
    altura: 1.80,
    peso: 80,
    endereco: {
        rua: 'Rua 1',
        numero: 10
    },
    habilidade: ['javascript', 'html', 'css']
}

console.log(pessoa.nome) // João
console.log(pessoa.endereco.rua) // Rua 1
console.log(pessoa.endereco.numero) // 10 
console.log(pessoa.habilidade[1]) // html

// maneira dinâmica para acessar
console.log(pessoa['no' + 'me']) // João
console.log(pessoa['nome']) // João

let name = 'nome'

console.log(pessoa[name]) // João

// Desestruturação de objetos

let {nome, altura } = pessoa
console.log(nome) // João
console.log(altura) // 1.80


pessoa.nome = 'Pedro'

console.log(pessoa.nome) // Pedro

pessoa.estudante = true
console.log(pessoa.estudante) // true

delete pessoa.estudante