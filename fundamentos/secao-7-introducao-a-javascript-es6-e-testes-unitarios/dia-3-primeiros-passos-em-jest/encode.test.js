const {encode, decode} = require('./encode');

describe('Exercício 4', () =>{
    test('encode e decode são funções', () => {
        expect(typeof encode &&  typeof decode).toEqual('function');
      });

    test('função encode, teste se as vogais a, e, i, o, u são convertidas em 1, 2, 3, 4 e 5, respectivamente', () => {
        expect(encode('aeiou')).toEqual('12345');
      });
    
      test('função decode, teste se os números 1, 2, 3, 4 e 5 são convertidos nas vogais a, e, i, o, u, respectivamente', () => {
        expect(decode('12345')).toEqual('aeiou');
      });

      test('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(encode('zlt')).not.toEqual('123');
      });

      test('Teste se as demais letras/números não são convertidos para cada caso', () => {
        expect(decode('678')).not.toEqual('drc');
      });
    
      test('Teste se a string que é retornada pelas funções tem o mesmo número de caracteres que a string passada como parâmetro.', () => {
        expect(encode('1n1l53s1').length).toEqual(8);
      });

});
