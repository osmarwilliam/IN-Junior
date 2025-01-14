// try, catch, finally

function dividir(a ,b) {
    if (b === 0) {
        throw new Error('Divisão por zero')
    }
    return a / b;
}

try {
    console.log(dividir(4, 0))
}
catch (error) {
    console.log(error.message)
}
finally {
    console.log('Fim da execução')
}

console.log('oi')