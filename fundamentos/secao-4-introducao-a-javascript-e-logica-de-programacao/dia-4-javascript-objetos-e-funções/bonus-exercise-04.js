// Usando o objeto abaixo, faça o que for pedido a seguir:




let moradores = {
    blocoUm: [
      {
        nome: 'Luiza',
        sobrenome: 'Guimarães',
        andar: 10,
        apartamento: 1005,
      },
      {
        nome: 'William',
        sobrenome: 'Albuquerque',
        andar: 5,
        apartamento: 502,
      },
    ],
    blocoDois: [
      {
        nome: 'Murilo',
        sobrenome: 'Ferraz',
        andar: 8,
        apartamento: 804,
      },
      {
        nome: 'Zoey',
        sobrenome: 'Brooks',
        andar: 1,
        apartamento: 101,
      },
    ],
  };

// Acesse as chaves nome, sobrenome, andar e apartamento do último morador do blocoDois e faça um console.log no seguinte formato: “O morador do bloco 2 de nome Zoey Brooks mora no 1° andar, apartamento 101”.

console.log(`O morador do bloco 2 de nome ${moradores['blocoDois'][1]['nome']} ${moradores['blocoDois'][1]['sobrenome']} mora no ${moradores['blocoDois'][1]['andar']}° andar, apartamento ${moradores['blocoDois'][1]['apartamento']}`)

// Utilize o for para imprimir o nome completo de todos os moradores do bloco 1, acessando suas chaves nome e sobrenome. Depois faça o mesmo para os moradores do bloco 2.

for (let i= 0; i < moradores.blocoUm.length; i += 1) {
    console.log(`${moradores.blocoUm[i].nome} ${moradores.blocoUm[i].sobrenome}`);
  }
  
  for (let i = 0; i < moradores.blocoDois.length; i += 1) {  
    console.log(`${moradores.blocoDois[i].nome} ${moradores.blocoDois[i].sobrenome}`);
  }