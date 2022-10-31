const checkNumbers = (numberSelected, number) => {
    if (number === numberSelected) {
        return 'Parabéns você ganhou';
    } 
    return 'Tente novamente';
};
    
 

  const valorsorteado = (numberSelected, callback) => {
    const number = Math.floor(Math.random() * (5) + 1);

    return callback(numberSelected, number);
  }

  console.log(valorsorteado(4, checkNumbers));