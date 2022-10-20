const lesson1 = {
    materia: 'Matemática',
    numeroEstudantes: 20,
    professor: 'Maria Clara',
    turno: 'manhã',
  };
  
  const lesson2 = {
    materia: 'História',
    numeroEstudantes: 20,
    professor: 'Carlos',
  };
  
  const lesson3 = {
    materia: 'Matemática',
    numeroEstudantes: 10,
    professor: 'Maria Clara',
    turno: 'noite',
  };


  // Functions

// Crie uma função para adicionar o turno da noite na lesson2. Essa função deve possuir três parâmetros, sendo eles: o objeto a ser modificado, a chave que deverá ser adicionada e o valor dela.


const addShift = (obj, key, value) => {
    obj[key] = value;
  }

  addShift(lesson2, 'turno', 'noite');

  console.log(lesson2);

// Crie uma função para listar as keys de um objeto. Essa função deve receber um objeto como parâmetro.

    const showObject = (obj) => Object.keys(obj);

    console.log(showObject(lesson2));
  
// Crie uma função para mostrar o tamanho de um objeto.


    // const sizeObject = (obj) => {
    //     let count = 0;
    //     for(const key  in obj) {
    //         count += 1;
    //     }
    //     return count;
    // } 
    const sizeObject = (obj) => Object.keys(obj).length; 
  
    console.log(sizeObject(lesson2));


// Crie uma função para listar os valores de um objeto. Essa função deve receber um objeto como parâmetro.


    const valueOfObject = (obj) => Object.values(obj); 
  
    console.log(valueOfObject(lesson2));
  

// Crie um objeto de nome allLessons, que deve agrupar todas as aulas através do Object.assign. Cada chave desse novo objeto será uma aula, sendo essas chaves: lesson1, lesson2 e lesson3. Ao executar o comando console.log(allLessons), a saída deverá ser a seguinte:


    const allLessons = (obj) = Object.assign({}, {lesson1, lesson2, lesson3}); 
  
    console.log(allLessons); 
  
//Crie uma função que retorne o número total de estudantes em todas as aulas.

const studentLesson1 = Number(allLessons.lesson1['numeroEstudantes']);
const studentLesson2 = Number(allLessons.lesson2['numeroEstudantes']);
const studentLesson3 = Number(allLessons.lesson3['numeroEstudantes']);

const totalStudents = (a, b, c) => studentLesson1 + studentLesson2 + studentLesson3;

console.log(totalStudents(studentLesson1,studentLesson2,studentLesson3));

// const getNumberOfStudents = (obj) => {
//     let total = 0;
  
//     const array = Object.keys(obj);
      
//     for (index in array) {
//       total += obj[array[index]].numeroEstudantes; // incremente a variável total a cada iteração
//     }
//     return total; // a função retorna o total de alunos após as iterações do "for/in"
//   };
//   console.log(getNumberOfStudents(allLessons));

// Crie uma função que obtenha o valor da chave de acordo com a sua posição no objeto. Por exemplo:

const arrayPosition = (obj, index) => Object.values(obj)[index]; 
  
    console.log(arrayPosition(lesson2, 0));


// Crie uma função que verifique se o par (chave / valor) existe na função. Essa função deve possuir três parâmetros, sendo eles: o objeto, o nome da chave e o valor da chave.


// const findKey = (obj, key, value) => obj.includes(key[value]);
// console.log(findKey(lesson2, 'materia', 'História'));

const findKey = (obj, key, value) => {
    const array = Object.entries(obj);
    if (array.includes(`${key}`) && array.includes(`${value}`)) {
        return true;
    } else {
        return false;
    }
    

    // let isEqual = false;
    // for (let index in arr) {
    //   if (arr[index][0] === key && arr[index][1] === value) isEqual = true;
    // }
    // return isEqual;
  };
  console.log(findKey(lesson2,'professor','Carlos'));

  // Utilizando o objeto (allLesson), crie uma função para contar quantos estudantes assistiram às aulas de Matemática.
   

   const mathSubject = (obj) => {
    let total = 0;
    const array = Object.keys(obj);
    for (i in array) {
      if(obj[array[i]].materia === 'Matemática') {
      total += obj[array[i]].numeroEstudantes;
      }
    }
    return total;
  }
  console.log(mathSubject(allLessons));
 
  // Utilizando o objeto (allLesson), crie uma função que deverá retornar um objeto que representa o relatório do professor ou professora, as aulas que ele ou ela ministrou e o número total de estudantes.

  const getReport = (obj, name) => {
    const allLessons = [];
    let allStudent = 0;
    const array = Object.values(obj);
    for (i in array) {
      if (array[i].professor === name) {
         if (allLessons.includes(`${array[i].materia}`)) {
            allLessons == allLessons;
         } else {
            allLessons.push(array[i].materia);
         }
        allStudent += array[i].numeroEstudantes;
      }
    }
    return { lessons: allLessons, estudantes: allStudent };
  }
  
  const createReport = (allLessons, name) => {
    const report = {};
    report.professor = name;
    Object.assign(report, getReport(allLessons, name));
    return report;
  }
  console.log(createReport(allLessons, 'Maria Clara'));
  

  