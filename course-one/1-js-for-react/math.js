export function adding(a, b) {
  return a + b;
}
export function multiply(a, b) {
  return a * b;
}

const todos = [
  { id: 1, task: "hello world", completed: false },
  { id: 2, task: "hello world 2", completed: false },
  { id: 3, task: "hello world 3", completed: false },
  { id: 4, task: "hello world 4", completed: false },
];

// array. foreach for itterating over an array
todos.forEach((todo) => {
  todo.completed = true;
});

//  array map. for transforming arrays

const mappedTodo = todos.map((todo) => {
  return { id: todo.id, des: todo.task };
});

console.log(mappedTodo);

// array filter. for filtering arrays

const filteredTodos = todos.filter((todo) => {
  return !todo.completed;
});

console.log(filteredTodos);

// array reduce. for reducing arrays

const totalTodos = todos.reduce((accumulator, todo) => {
  return accumulator + 1;
}, 0);

console.log(totalTodos);

// object.keys for getting all keys of an object

const keys = Object.keys(todos);
console.log(keys);

// object.values for getting all values of an object

const values = Object.values(todos);
console.log(values);

// object.entries for getting all key-value pairs of an object

const entries = Object.entries(todos);
console.log(entries);

// array.find for finding a value in an array

const foundTodo = todos.find((todo) => {
  return todo.task === "hello world";
});

console.log(foundTodo);

// array.findIndex for finding the index of a value in an array

const index = todos.findIndex((todo) => {
  return todo.task === "hello world";
});

console.log(index);

// array.includes for checking if an array contains a value

const includes = todos.includes({
  id: 1,
  task: "hello world",
  completed: false,
});

console.log(includes);

// array.flat for flattening arrays

const nestedArray = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray = nestedArray.flat();
console.log(flattenedArray);

// array.flatMap for flattening arrays and applying a function to each element

const flattenedWithMapArray = nestedArray.flatMap((item) => item);
console.log(flattenedWithMapArray);

// array.sort for sorting arrays

const sortedArray = [5, 3, 8, 2, 1];
sortedArray.sort((a, b) => a - b);
console.log(sortedArray);

// array.reverse for reversing arrays

const reversedArray = [5, 3, 8, 2, 1];
reversedArray.reverse();
console.log(reversedArray);

// array.splice for modifying arrays

const modifiedArray = [5, 3, 8, 2, 1];
modifiedArray.splice(2, 0, 4);
console.log(modifiedArray);

// array.slice for creating new arrays from existing arrays

const copiedArray = [5, 3, 8, 2, 1];
const copiedArray2 = copiedArray.slice();
console.log(copiedArray2);

// array.concat for merging arrays

const mergedArray = [5, 3, 8, 2, 1].concat([4, 9, 6]);
console.log(mergedArray);

// array.pop for removing the last element of an array

const poppedArray = [5, 3, 8, 2, 1];
poppedArray.pop();
console.log(poppedArray);

// array.push for adding elements to the end of an array

const pushedArray = [5, 3, 8, 2, 1];
pushedArray.push(6);
console.log(pushedArray);

// array.shift for removing the first element of an array

const shiftedArray = [5, 3, 8, 2, 1];
shiftedArray.shift();
console.log(shiftedArray);

// array.unshift for adding elements to the beginning of an array

const unshiftedArray = [5, 3, 8, 2, 1];
unshiftedArray.unshift(0);
console.log(unshiftedArray);

// array.splice for removing and/or adding elements to an array

const splicedArray = [5, 3, 8, 2, 1];
splicedArray.splice(2, 0, 4);
splicedArray.splice(4, 1);
console.log(splicedArray);

// array.join for joining elements of an array into a string

const joinedArray = [5, 3, 8, 2, 1];
const joinedString = joinedArray.join(", ");
console.log(joinedString);

// array.map for transforming elements of an array

const transformedArray = [5, 3, 8, 2, 1];
const transformedArray2 = transformedArray.map((item) => item * 2);
console.log(transformedArray2);

// array.filter for filtering elements of an array

const filteredArray2 = transformedArray.filter((item) => item > 5);
console.log(filteredArray2);

// array.reduce for reducing elements of an array to a single value

const reducedValue = transformedArray.reduce((accumulator, item) => {
  return accumulator + item;
}, 0);
console.log(reducedValue);

// array.every for checking if all elements of an array meet a condition

const everyCondition = transformedArray.every((item) => item > 0);
console.log(everyCondition);

// array.some for checking if at least one element of an array meets a condition

const someCondition = transformedArray.some((item) => item > 5);
console.log(someCondition);

// array.find for finding the first element of an array that meets a condition

const foundElement = transformedArray.find((item) => item > 5);
console.log(foundElement);

// array.findIndex for finding the index of the first element of an array that meets a condition

const indexElement = transformedArray.findIndex((item) => item > 5);
console.log(indexElement);

// array.includes for checking if an array includes a certain element

const includesElement = transformedArray.includes(6);
console.log(includesElement);

// array.flat for flattening arrays

const nestedArray2 = [
  [1, 2],
  [3, 4],
  [5, 6],
];
const flattenedArray2 = nestedArray2.flat();
console.log(flattenedArray2);

// array.flatMap for flattening arrays and applying a function to each element

const flattenedWithMapArray2 = nestedArray2.flatMap((item) => item);
console.log(flattenedWithMapArray2);

// array.sort for sorting arrays

const sortedArray2 = [5, 3, 8, 2, 1];
sortedArray2.sort((a, b) => a - b);
console.log(sortedArray2);

// array.reverse for reversing arrays

const reversedArray2 = [5, 3, 8, 2, 1];
reversedArray2.reverse();
console.log(reversedArray2);

// array.splice for modifying arrays

const modifiedArray2 = [5, 3, 8, 2, 1];
modifiedArray2.splice(2, 0, 4);
console.log(modifiedArray2);

// array.slice for creating new arrays from existing arrays

const copiedArray3 = [5, 3, 8, 2, 1];
const copiedArray4 = copiedArray3.slice();
console.log(copiedArray4);

// array.concat for merging arrays

const mergedArray2 = [5, 3, 8, 2, 1].concat([4, 9, 6]);
console.log(mergedArray2);

// array.pop for removing the last element of an array

const poppedArray2 = [5, 3, 8, 2, 1];
poppedArray2.pop();
console.log(poppedArray2);

// array.push for adding elements to the end of an array

const pushedArray2 = [5, 3, 8, 2, 1];
pushedArray2.push(6);
console.log(pushedArray2);

// array.shift for removing the first element of an array

const shiftedArray2 = [5, 3, 8, 2, 1];
shiftedArray2.shift();
console.log(shiftedArray2);

// array.unshift for adding elements to the beginning of an array

const unshiftedArray2 = [5, 3, 8, 2, 1];
unshiftedArray2.unshift(0);
console.log(unshiftedArray2);

// array.splice for removing and/or adding elements to an array

const splicedArray2 = [5, 3, 8, 2, 1];
splicedArray2.splice(2, 0, 4);
splicedArray2.splice(4, 1);
console.log(splicedArray2);

// array.join for joining elements of an array into a string

const joinedArray2 = [5, 3, 8, 2, 1];
const joinedString2 = joinedArray2.join(", ");
console.log(joinedString2);

// array.map for transforming elements of an array

const transformedArray3 = [5, 3, 8, 2, 1];
const transformedArray4 = transformedArray3.map((item) => item * 2);
console.log(transformedArray4);

// array.filter for filtering elements of an array
