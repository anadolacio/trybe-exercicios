const searchEmployee = require('./bonus');

describe('Exercício Bônus', () =>{

    const professionalBoard = [
        {
          id: '8579-6',
          firstName: 'Ana',
          lastName: 'Gates',
          specialities: ['UX', 'Design'],
        },
        {
          id: '5569-4',
          firstName: 'George',
          lastName: 'Jobs',
          specialities: ['Frontend', 'Redux', 'React', 'CSS'],
        },
        {
          id: '4456-4',
          firstName: 'Leila',
          lastName: 'Zuckerberg',
          specialities: ['Context API', 'RTL', 'Bootstrap'],
        },
        {
          id: '1256-4',
          firstName: 'Linda',
          lastName: 'Bezos',
          specialities: ['Hooks', 'Context API', 'Tailwind CSS'],
        },
        {
          id: '9852-2-2',
          firstName: 'Jeff',
          lastName: 'Cook',
          specialities: ['Ruby', 'SQL'],
        },
        {
          id: '4678-2',
          firstName: 'Paul',
          lastName: 'Dodds',
          specialities: ['Backend'],
        },
      ];
        test('função existe', () => {
            expect(typeof searchEmployee).toEqual('function');
        });

      test('Testa se searchEmployee(id, "lastName") retorna o primeiro nome do usuário da id consultada', () => {
        expect(searchEmployee('1256-4', 'firstName')).toBe('Linda');
       });
      test('Testa se searchEmployee(id, "firstName") retorna o primeiro nome do usuário da id consultada', () => {
        expect(searchEmployee('1256-4', 'lastName')).toBe('Bezos');
      });
      test('Testa se searchEmployee(id, "specialities") retorna o primeiro nome do usuário da id consultada', () => {
        expect(searchEmployee('1256-4', 'specialities')).toContain('Hooks', 'Context API', 'Tailwind CSS');
      });
                
      test('informação que se quer acessar não existir, a função deve retornar o erro "Informação indisponível', () => {
        expect(() => searchEmployee('4678-2', 'shift')).toThrowError('nformação indisponível');
      });

      test('id não conste no quadro de funcionários, sua função deve retornar o erro "ID não identificada', () => {
        expect(() => searchEmployee('1256-8', 'specialities')).toThrowError('ID não identificada');
      });
    
   });