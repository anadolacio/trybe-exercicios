// Crie uma função que receba uma string word e outra string ending. Verifique se a string ending é o final da string word. Considere que a string ending sempre será menor que a string word.

let word = "trybe"
let wordEnds = "ybe";


function checkEnd(word, wordEnds) {
    word = word.split("");
    wordEnds = wordEnds.split("");
    check = true;
    
    for (let i = 0; i < wordEnds.length; i += 1){
        if (word[word.length - wordEnds.length + i] !== wordEnds[i]) {
            check = false;
        }
    }

    return check;
}

console.log(checkEnd(word,wordEnds));

