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

//* -----42-4 Array and object Destructuring, optional chaining-----

/* // 1. array destructuring
const numbers = [42, 65];
// const x = numbers[0];
// const y = numbers[1];

const [x, y] = [42, 65];
const [p, q] = numbers;
console.log(x, y);

function boxify(num1, num2) {
  const nums = [num1, num2];
  return nums;
}

const [first, second] = boxify(90, 34);
// console.log(boxify(90, 34));
console.log(first, second);

const student = {
  name: 'Skib Khan',
  age: 34,
  movies: ['King khan', 'Dhakar Mastan'],
};

const [firstMovie, secondMovie] = student.movies;
console.log(firstMovie, secondMovie);

// 2. object destructuring
const { name, age } = { name: 'alu', age: 14 };
// const { name, age } = { id: 12, name: 'alu', salary: 3400, age: 14 };

const employee = {
  ide: 'VS Code',
  designation: 'developer',
  machine: 'mac',
  languages: ['html', 'css', 'js'],
  specification: {
    height: 66,
    weight: 67,
    address: 'kumarkhali',
    drink: 'water',
    watch: {
      color: 'black',
      price: 500,
      brand: 'garmin',
    },
  },
};

const { machine, ide } = employee;
const { weight, address } = employee.specification;
const { brand } = employee?.specification?.watch;
console.log(brand); */

//* -----42-5 JSON, Fetch, keys, values, array add or remove using dots-----

/* // 1. JSON => stringify, parse
const student = {
  name: 'Salib Khan',
  age: 32,
  movies: ['king khan', 'Dhakar Mastan'],
};

const studentJSON = JSON.stringify(student);
console.log(student);
console.log(studentJSON);

const studentObj = JSON.parse(studentJSON);
console.log(studentObj);

// 2. fetch
fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then((response) => response.json())
  .then((data) => console.log(data));

// 3. Objects keys, values, entries

const objKeys = Object.keys(student);
console.log(objKeys);

const objValues = Object.values(student);
console.log(objValues);

const objKeysValuesPair = Object.entries(student);
console.log(objKeysValuesPair);

// forEach
const numbers = [23, 54, 67, 87, 23, 78];
numbers.forEach((number) => console.log(number));
numbers.map((number) => number * 2);

//* Use: for of => array, array like object, arguments, querySelector,         querySelectorAll etc.

//* Use: for in => Object

// add or remove from an array
const products = [
  { name: 'laptop', price: 3200, brand: 'len', color: 'silver' },
  { name: 'phone', price: 7000, brand: 'HTC', color: 'golden' },
  { name: 'watch', price: 3000, brand: 'casio', color: 'yellow' },
  { name: 'sungalss', price: 300, brand: 'ray', color: 'black' },
  { name: 'camera', price: 9000, brand: 'canon', color: 'gray' },
];

const newProduct = { name: 'webcam', price: 700, color: 'red' };

//* copy products Array and then add newProduct Object
const newProducts = [...products, newProduct];
console.log(newProducts);

//* create a new array without one specific item
// remove phone means create a new array without the phone
const remaining = products.filter((product) => product.name !== 'phone');
console.log(remaining);
 */

//* -----42-6 (advanced) truthy, false Ternary operator, shortcut and or-----

//* falsy values: false, 0, '', undefined, null, NaN

//* truthy values: true, any number(positive & negative), any string including single white space, [], {}, anything else that is not falsy will be truthy
/* 
// check truthy
let myVar = 5;
// check any truthy
if (myVar) {
  myVar = myVar * 100;
  console.log(myVar);
} else {
  myVar = 0;
  console.log(myVar);
}

let myMoney = 50;
// this way you can check negative or falsy anything
if (!myMoney) {
}

const money = 800;
// let food;
// if (money > 100) {
//   food = 'birayani';
// } else {
//   food = 'cha biscuit';
// }

//* ternary operator
let food1 = money > 100 ? 'birayani' : 'cha biscuit';
console.log(food1);

let drink = money > 100 && myVar > 100 ? 'coke' : 'water';
console.log(drink);

// number to string conversion
const num1 = 52;
console.log(num1);

const numStr = num1 + '';
console.log(numStr);

// string to number conversion
const input = '560';
const inputNum = +input;
console.log(inputNum);

//
let isActive = true;
const showUser = () => console.log('display User');
const hideUser = () => console.log('Hide User');
// isActive ? showUser() : hideUser();

// use && if the left side is true then the right side will be executed
isActive && showUser();

// use || if the left side is false then right side will be executed
isActive || hideUser();

// toggle boolean
isActive = !isActive;
console.log(isActive);
 */

//* -----42-7 Explore Localstorage and session storage with JSON-----

/* const addToLocalStorage = () => {
  const idInput = document.getElementById('storage-id');
  const id = idInput.value;

  const valueInput = document.getElementById('storage-value');
  const value = valueInput.value;

  // add to local storage
  if (id && value) {
    localStorage.setItem(id, value);
  }
  idInput.value = '';
  valueInput.value = '';
};

// with JSON
localStorage.setItem('friend1', [45, 78, 98]);
localStorage.setItem('friend2', JSON.stringify([45, 78, 98]));

const pen = { price: 10, color: 'black' };
localStorage.setItem('pen1', pen);
localStorage.setItem('pen2', JSON.stringify(pen));

const storedPen = localStorage.getItem('pen2');
const penObj = JSON.parse(storedPen);
console.log(penObj); */
