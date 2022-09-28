// Parte 1 - Crie uma função que receba uma string e retorne true se for um palíndromo, ou false, se não for.

let word = "arara";



function reverseWord(word) {
    return word.split("").reverse().join("");
}

if (reverseWord(word) === word) {
    console.log("true");
} else {
    console.log("false");
}


