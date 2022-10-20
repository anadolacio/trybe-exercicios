
      function hydrate(sentence) {
        let array = sentence.split (" ");
        let number = [1, 2, 3, 4, 5, 6, 7 ,8 ,9]
        let count = 0;
        for (let i = 0; i < array.length; i += 1) {
            for (let j = 0; j < number.length; j += 1) {
               if (array[i] == number[j]) {
                  count += number[j];
               }
            count = count;
            }
        }
      
        if (count == 1 ) {
          return "1 copo de água";
        } else {
          return `${count} copos de água`; 
        }
      }
  
  module.exports = hydrate;
