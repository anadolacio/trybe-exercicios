// Crie uma função que receba um array de nomes e retorne o nome com a maior quantidade de caracteres.

let names = ['José', 'Lucas', 'Nádia', 'Fernanda', 'Cairo', 'Joana'];

function biggestName(names) {
    let biggerName = 0;
    let result;
    for (let i = 0; i < names.length; i += 1) {
        if (biggerName < names[i].length) {
            biggerName = names[i].length;
            result = names[i];
        } 
    }
    return result;
}

console.log(biggestName(names));