// Escreva uma função filterPeople que, dada uma lista de pessoas, retorne todas as pessoas australianas que nasceram no século 20:

const people = [
    {
      name: 'Nicole',
      bornIn: 1992,
      nationality: 'Australian',
    },
    {
      name: 'Harry',
      bornIn: 2008,
      nationality: 'Australian',
    },
    {
      name: 'Toby',
      bornIn: 1901,
      nationality: 'Australian',
    },
    {
      name: 'Frida',
      bornIn: 1960,
      nationality: 'Dannish',
    },
    {
      name: 'Fernando',
      bornIn: 2001,
      nationality: 'Brazilian',
    },
      // bornIn: nascido em
  ];
  
  const bornInsecXX = (array) => {
    return array.filter(({ nationality, bornIn }) => {
        return nationality === 'Australian' && bornIn > 1900 & bornIn <= 2000;
  })
};

  console.log(bornInsecXX(people));