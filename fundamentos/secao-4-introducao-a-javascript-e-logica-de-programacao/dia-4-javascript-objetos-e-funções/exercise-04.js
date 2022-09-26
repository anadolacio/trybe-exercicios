// Parte 2 - Crie uma função que receba um array de inteiros e retorne o índice do maior valor.

let array = [2, 3, 6, 7, 10, 1];

function greaterValue(array) {
    let greater = 0;
    let index = 0;
    for (let i = 0; i < array.length; i += 1) {
        if (greater < array[i]) {
            greater = array[i];
            index = i;
        }
    }
    return index;
}

console.log(greaterValue(array));

//Parte 3 - Crie uma função que receba um array de inteiros e retorne o índice do menor valor.

let array2 = [2, 4, 6, 7, 10, 0, -3];

function lowerValue(array2) {
    let lower = 0;
    let index = 0;
    for (let i = 0; i < array2.length; i += 1) {
        if (lower > array2[i]) {
            lower = array2[i];
            index = i;
        }
    }
    return index;
}

console.log(lowerValue(array2));