// Exercise 01

const factorial = (n) => {
    let result = 1;
for(let i = 1; i <= n; i += 1) {
    result *= i; 
}
 return result;
};
const value = factorial(4);

console.log(`Esse é o fatorial resultado da função: ${value}`);

// Exercise 02


const longestWord = (phrase) => {
    let newArray = phrase.split(' ');
    let biggestWord = 0;
    let result = '';
    for(let i = 0; i < newArray.length; i += 1){
        if (newArray[i].length > biggestWord){
            biggestWord = newArray[i].length;
            result = newArray[i];
        }
    }
    return result
};

console.log(longestWord('Antonio foi ao banheiro e não sabemos o que aconteceu'));

// Exercise 04

const substituaX = (firstName) => {
    const phrase = `Trybe x aqui!`;
    const splitPhrase = phrase.split(' ');
    for(let i = 0; i < splitPhrase.length; i += 1){
        if(splitPhrase[i] == 'x') {
            splitPhrase[i] = `${firstName}`;
        }
    }
    return splitPhrase.join(' ');
}

//console.log(substituaX('bebeto'));

const minhasSkills = (func) => {
    const skills = ['JS', 'HTML', 'CSS'];
    let resultado = `${func}
    Minhas três principais habilidades são: ${skills}`;

 
    skills.forEach((skill) => { // estrutura de repetição para iterar sobre o array de skills
      resultado = `${resultado}
      - ${skill}`;
    }); // reatribui e adiciona a skill atual a variável resultado
    return resultado;
  };
  
  console.log(minhasSkills(substituaX('Bebeto')));