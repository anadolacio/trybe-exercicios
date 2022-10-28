const names = [
    'Aanemarie', 'Adervandes', 'Akifusa',
    'Abegildo', 'Adicellia', 'Aladonata',
    'Abeladerco', 'Adieidy', 'Alarucha',
  ];
  
// Dado o array de nomes, utilize o reduce para retornar a quantidade de vezes em que aparece a letra a, maiúscula ou minúscula.
//   const expectedResult = 20;
  
  function containsA() {
   const lowerCase = names.map((name) => name.toLowerCase());

let countA =0;
   lowerCase.forEach((element) => {
   const lettersSplited = element.split('');

   countA += lettersSplited.reduce((acc, letter) => {
        if (letter === 'a') {
;            return acc + 1;
        } 
        return acc;
   }, 0)
      
  })
   return countA;
  }

  console.log(containsA());