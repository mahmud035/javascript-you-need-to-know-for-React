'use strict';

//* -----42-1 Six JavaScript Fundamentals that you need to know-----

/* // 1. How to declare a variable using let and const
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
console.log(student[myVariable]); // access via property name in a variable */

//* -----42-2 template string, arrow function, spread operator-----

/* // 1. template string
const numbers = [89, 35, 98, 12];

const student = {
  name: 'Skib Khan',
  age: 34,
  movies: ['King khan', 'Dhakar Mastan'],
};

const about = `My name is ${student.name}. I am ${student.age} years old. Has number: ${numbers[2]}. Also liked movies: ${student.movies[1]}, ${student.movies[0]}.`;
console.log(about);

// 2. arrow function
const getFiftyFive = () => 55;

const addSixtyFive = (num) => num + 65;

const isEven = (x) => x % 2 === 0;

const addThree = (x, y, z) => x + y + z;

const doMath = (num1, num2) => {
  const sum = num1 + num2;
  return sum;
};

// 3. spread operator
console.log(numbers);
const newNumbers = [77, ...numbers, 999];
numbers.push(100);

console.log(newNumbers);
console.log(numbers);

//* create a new array from an older array and add an element
const currentNumbers = [...numbers, 55];
console.log(currentNumbers); */

//* -----42-3 Array methods map filter find forEach-----

/* const products = [
  { name: 'laptop', price: 3200, brand: 'lenovo', color: 'silver' },
  { name: 'phone', price: 7000, brand: 'iphone', color: 'golden' },
  { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
  { name: 'sunglass', price: 300, brand: 'ray', color: 'black' },
  { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];

// 1. map()
const brands = products.map((product) => product.brand);
console.log(brands);

const prices = products.map((product) => product.price);
console.log(prices);

// 2. forEach()
products.forEach((product) => console.log(product));
products.forEach((product) => console.log(product.color));

products.forEach((product) => {});

// 3. filter()
const cheap = products.filter((product) => product.price <= 5000);
console.log(cheap);

const specificName = products.filter((product) => product.name.includes('n'));
console.log(specificName);

// 4. find()
const special = products.find((product) => product.name.includes('n'));
console.log(special); */
