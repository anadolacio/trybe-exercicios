// Crie uma função que receba um array de inteiros e retorne o inteiro que mais se repete.

let array = [2, 3, 2, 5, 8, 2, 3];

function repeat(array) {
    let repeatNumber = 0;
    let number = 0;
   
    for (let i = 0; i < array.length; i += 1){
        let count = 0;
        for (j = i + 1; j < array.length; j += 1){
            if (array[i] === array[j]){
                count += 1;
            }
        }

        if (count > repeatNumber) {
            repeatNumber = count;
            number = array[i];
        }
        
        count = 0;
    }
    return number;
}

console.log(repeat(array));