let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];

// Each number on the Array
for (let index = 0; index < numbers.length; index++) {
      console.log("Number[" + index +"]: " + numbers[index]);
}


console.log();

// Total sum

let sum = 0;

for (let index = 0; index < numbers.length; index++) {
    sum = sum + numbers[index];
}

console.log("Total sum: " + sum);
console.log();

//Average

let average = sum / numbers.length;

console.log("Average: " + average);

console.log();

// Greater than 20

if (average > 20) {
    console.log("Value greater than 20");
}
else {
    console.log("Value less or equal 20")
}

console.log();

// Highest value on the array

let a = numbers[0];

for (let index = 1; index < numbers.length; index++) {
    if (a > numbers[index]) {
        a = a;
    }
    else {
        a = numbers[index];
    }
}

console.log("Highest value: " + a);

console.log();



// How many odd numbers


let odd = 0;

for (let index = 0; index < numbers.length; index++) {
    if (numbers[index] % 2 !== 0) {
        odd += 1;
    }  
}

if (odd == 0) {
    console.log("No odd value was found!");
}
else {
    console.log("Odd value: " + odd);
}

console.log();

// Smallest value

let b = numbers[0];

for (let index = 1; index < numbers.length; index++) {
    if (b < numbers[index]) {
        b = b;
    }
    else {
        b = numbers[index];
    }
}

console.log("Smallest value: " + b);

console.log();


// Array

let values = [];

for (let index = 1; index <= 25; index++) {
    values.push(index);
    
}

console.log(values);

console.log();

// Divide for 2


for (let index = 0; index < values.length; index++) {
    console.log(values[index] / 2);
}

