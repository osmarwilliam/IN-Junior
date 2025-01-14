let numSeqFibonacci = parseInt(prompt("Digite quantos números deseja ver: "));

function fibonacci(numSeqFibonacci) {
    let num1 = 0;
    let num2 = 1;
    let num3 = 0;
    let vetor = [num1, num2];

    for (let i =0; i < numSeqFibonacci; i++) {
        num3 = num1 + num2;
        num1 = num2;
        num2 = num3;
        vetor.push(num3);
    }
    return vetor;
}

alert(fibonacci(numSeqFibonacci));