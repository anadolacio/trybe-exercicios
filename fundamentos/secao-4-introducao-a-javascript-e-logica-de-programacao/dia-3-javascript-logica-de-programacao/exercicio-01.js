// Factorial

let factorial = 10;

for (let i = 1; i <= 10; i += 1) {
    factorial *= i;
}

console.log("10! = ", factorial);

// Anagram

let word = "tryber";
let reverseWord = "";

for (let i = 0; i < word.length; i += 1) {
    reverseWord += word[(word.length) -1 - i];
}

console.log(reverseWord);

// Array

let array = ['java', 'javascript', 'python', 'html', 'css'];

let longer = array[0].length;
let shorter = array[0].length;

for (let i = 1; i < array.length; i += 1) {
    if (longer < array[i].length) {
        longer = array[i].length;
    }

    if (shorter > array[i].length) {
        shorter = array[i].length;
    }
}

console.log("Longer: ", longer, "and Shorter: ", shorter);


// Bigest odd


let biggestOdd = 0;

for (let i = 2; i <= 50; i += 1) {
  let isPrime = true;
  for (let j = 2; j < i; j += 1) {
    if (i % j === 0) {
      isPrime = false;
    }
  }
  if (isPrime) {
    biggestOdd = i;
  }
}

console.log(biggestOdd);
