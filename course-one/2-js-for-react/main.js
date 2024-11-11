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
