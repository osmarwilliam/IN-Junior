let nome = prompt('Digite o seu nome: ')
let idade = prompt('Digite a sua idade: ')
let verificarEstudande = confirm('É estudande?')

if (idade >= 18) {
    if (verificarEstudande == true) {
        if (idade >= 25) {
            alert(`${nome}, você recebeu 30% de desconto!`)
        }
        else {
            alert(`${nome}, você recebeu 20% de desconto!`)
        }
    }
    else {
        alert(`${nome}, você recebeu 10% de desconto!`)
    }
}
else if (16 <= idade <= 17) {
    alert('É necessário a autorização de um responsável!')
}
else if (idade < 16) {
    alert('Acesso negado, idade não permitida!')
}