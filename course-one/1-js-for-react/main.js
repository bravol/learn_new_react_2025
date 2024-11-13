import { adding, multiply } from "./math";

function main() {
  console.log("test");
  console.log("test 2");
}

function main2() {
  const x = 10;
  console.log(x);
}

function addtradition(a, b) {
  // named function
  return a + b;
}

const add2 = function (a, b) {
  // anonymous function
  return a + b;
};

const add = (a, b) => a + b; // ARROW FUNCTION
console.log(addtradition(1, 2));
console.log(add(2, 2));

// main();
// main2();

// rest operator
function test(arg, ...otherArgs) {
  console.log(arg, otherArgs);
}

test(1, 2, 3, 4, 5);

// spread operator
const fruits = ["apple", "banana"];
const moreFruits = ["orange"];
const newFruits = [...fruits, ...moreFruits];
console.log(newFruits);

// exports and imports
console.log(adding(2, 4));
console.log(multiply(2, 4));

//  interpolation
const name = "Brian";
const greeting = `Hello, ${name}!`; // string interpolation
console.log(greeting);

const a = 10;
const b = 20;
console.log(`the sum of ${a} and ${b} = ${add(a, b)}`);

const user = {
  name: "John Doe",
  age: 30,
  address: {
    street: "123 Main St",
    city: "New York",
    state: "NY",
  },
};

console.log(`Name: ${user.name}`);
console.log(`Age: ${user.age}`);
console.log(
  `Address: ${user.address.street}, ${user.address.city}, ${user.address.state}`
);

// destructuring
const { name: userName, age } = user;
console.log(`Name: ${userName}`);
console.log(`Age: ${age}`);

const {
  address: { street, city, state },
} = user;
console.log(`Street: ${street}`);
console.log(`City: ${city}`);
console.log(`State: ${state}`);

// template literals
const str = "Hello, World!";
console.log(str);

// arrow functions
const square = (x) => x * x;
console.log(square(5));

const multiply2 = (a, b) => {
  return a * b;
};
console.log(multiply2(2, 3));

// higher-order functions
const numbers = [1, 2, 3, 4, 5];
const doubledNumbers = numbers.map((num) => num * 2);
console.log(doubledNumbers);

const filterNumbers = numbers.filter((num) => num > 3);
console.log(filterNumbers);

const sum = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);
console.log(sum);

// closures
function createCounter() {
  let count = 0;
  return function increment() {
    count++;
    console.log(count);
  };
}

const counter1 = createCounter();
counter1();
