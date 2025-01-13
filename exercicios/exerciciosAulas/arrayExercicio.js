let livros = ['Dom Quixote', '1984', 'O Senhor dos Anéis', 'Cem anos de Solidão']

livros.unshift('A Revolução dos bichos')
livros.unshift('Os Miseráveis')

let ultimoLivro = livros.pop()
console.log(ultimoLivro) // Cem anos de Solidão

let livroPresente = livros.includes('1984')
console.log(livroPresente) // true

let posicao = livros.indexOf('O Senhor dos Anéis')
console.log(posicao) // 2

let livrosPopulares = ['1984', 'Cem Anos de Solidão', 'Os Miseráveis']

for(let i = 0; i < livrosPopulares.length; i++) {
    console.log(`Posição ${i + 1}: ${livrosPopulares[i]}`)
}
