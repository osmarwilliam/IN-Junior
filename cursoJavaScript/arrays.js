let frutas = ['banana', 'laranja', 'uva', 12, true, 15, null];

console.log(frutas[0]) // banana
// console.log(frutas[1]) // laranja

frutas[3] = 'morango'
frutas[0] = 'melancia'

 let frutas2 = frutas // passando valor por referencia

// arrays como valores de arrays

let listaDeCompras = ['ovo', 'leite', 'farinha']
listaDeCompras[3] = frutas

console.log(listaDeCompras[3][2])

// Métodos de manipulaçoes de arrays

const hogwarts = ['Harry', 'Herminio', 'Rony', 'Dumbledore', 'Snape', 'Hagrid', 'Draco', 'Luna', 'Neville']

// push (adiciona no fim do array)

hogwarts.push('Voldemort')
console.log(hogwarts)
// unshift (Adiciona no inicio do array)

hogwarts.unshift('Sirius')
console.log(hogwarts)

// pop (retira o último elemento do array)

hogwarts.pop()
console.log(hogwarts)

// shift (retira o primeiro elemento do array) 

hogwarts.shift()
console.log(hogwarts)

// indexOf

let indice = hogwarts.indexOf('Rony')
console.log(indice) // caso o elemento não esteja irá ser retornado '-1'

// includes (boolean)
let existe = hogwarts.includes('Dobby')
console.log(existe)

// slice (copia parte do array)

let trioDeOuro = hogwarts.slice(0, 3) // primeiro parametro é o inicio (fechado) e o segundo é o fim (aberto)

let hogwarts2 = hogwarts.slice() // criado um novo array com os mesmos valores, mas sem ser passado por referencia

// concat

let numeros = [1, 2, 3]
let letras = ['a', 'b', 'c']
let simbolos = ['!', '@', '#']

let letrasNumerosSimbolos = letras.concat(numeros, simbolos)
console.log(letrasNumerosSimbolos) // ['a', 'b', 'c', 1, 2, 3, '!', '@', '#']

// length

console.log(hogwarts.length) // 8

for (let personagem of hogwarts) {
    console.log(personagem) // Harry, Herminio, Rony, Dumbledore, Snape, Hagrid, Draco, Luna
}

let [primeiro, segundo, , quarto] = hogwarts
console.log(primeiro) // Harry
console.log(quarto) // Dumbledore