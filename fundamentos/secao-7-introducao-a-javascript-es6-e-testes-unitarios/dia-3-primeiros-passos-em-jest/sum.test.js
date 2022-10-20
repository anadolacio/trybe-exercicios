
const sum = require('./sum');


describe('Exercício 1', () =>{
    test('retorno de sum(4, 5) é 9', () => {
        expect(sum(4, 5)).toEqual(9);
      });
    
    
      test(' retorno de sum(0, 0) é 0', () => {
        expect(sum(0, 0)).toEqual(0);
      });
    
    
      test('erro quando os parâmetros são 4 e "5"(string 5)', () => {
        expect(() => sum(4, '5')).toThrowError();
      });

          
      test('erro é “parameters must be numbers” quando realizar a chamada sum(4, "5")', () => {
        expect(() => sum(4, '5')).toThrowError('parameters must be numbers');
      });
});
