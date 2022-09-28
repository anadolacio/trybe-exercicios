// Crie uma função que receba um número natural (número inteiro não negativo) N e retorne o somatório de todos os números de 1 até N.

let number = 5;

function sum(number) {
    let result = 0
    for (let i = 1; i <= number; i += 1) {
        result += i; 
    }

    return result;
}

console.log(sum(number));