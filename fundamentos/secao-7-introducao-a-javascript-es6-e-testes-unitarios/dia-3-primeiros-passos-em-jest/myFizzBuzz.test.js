const myFizzBuzz = require('./myFizzBuzz');


describe('Exercício 3', () =>{
    
    test('número divisível por 3 e 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
      });
    
      test('número divisível por 3 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(9)).toBe('fizz');
      });

      test('número divisível por 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(25)).toBe('buzz');
      });

      test('um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz(26)).toBe(26);
      });

      test(' um parâmetro que não é um número e verifique se o retorno é o esperado', () => {
        expect(myFizzBuzz('5')).toBe(false);
      });


});


