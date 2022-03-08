'use strict';

//* -----42-1 Six JavaScript Fundamentals that you need to know-----

// 1. How to declare a variable using let and const
const fatherName = 'Arnold';
let season = 'Summer';
season = 'winter';

// 2. conditions
// 6 basic conditions: >, <, ===, !==. <=, >=
// multiple conditions: &&, ||

if (fatherName === 'arnold' || season === 'rainy') {
} else {
}

// 3. array declare
// index
// length, push,
const numbers = [89, 35, 98, 12];
numbers[0] = 56;

// 4. for loop, while loop
// for loop
for (let i = 0; i < numbers.length; i++) {
  const number = numbers[i];
  console.log(number);
}

// 5. function
function multiply(a, b) {
  const result = a * b;
  return result;
}

const output = multiply(90, 10);

// 6. Object
//* 3 ways to access object property by name
const student = {
  name: 'John',
  age: 34,
  movies: ['King khan', 'Dhakar Mastan'],
};

const myVariable = 'age';
console.log(student.age); // direct by property
console.log(student['age']); // access via property name string
console.log(student[myVariable]); // access via property name in a variable
