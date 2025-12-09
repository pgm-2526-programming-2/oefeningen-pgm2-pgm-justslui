//SPREADING
//📌 1. Kopiëren van Arrays
//----------------------------------------------------------------------------------------------------------

const originalArray = [1, 2, 3];
const copiedArray = copyArray(originalArray);

function copyArray(...arr) {
  return [...arr];
}

console.log(copiedArray);

//📌 2. Samenvoegen van Arrays
//----------------------------------------------------------------------------------------------------------

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

function mergeArrays(a, b) {
  return [...a, ...b];
}

console.log(mergeArrays(array1, array2));

//📌 3. Toevoegen van Objecteigenschappen
//----------------------------------------------------------------------------------------------------------

const originalObject = { name: "Alice" };
const updatedObject = addProperty(originalObject, "age", 25);


function addProperty(a, b, c) {
  return {
    ...a,
    [b]: c 
  }
}

console.log(updatedObject);

//📌 4. Samenvoegen van Objecten
//----------------------------------------------------------------------------------------------------------

const object1 = {a: 1, b: 2};
const object2 = {b: 3, c: 4};
const mergedObject = mergeObjects(object1, object2);

function mergeObjects(a, b) {
  return {
    ...a,
    ...b
  }
}

console.log(mergedObject);

//📌 5. Length van argumenten
//----------------------------------------------------------------------------------------------------------

function add(...argument) {
  console.log(argument.length);
  return argument.reduce((prev, curr) => prev + curr, 0);
}

add(1, 5, 6);
add(1, 5, 6, 5, 1561, 2, 5);

//📌 6. Flat
//----------------------------------------------------------------------------------------------------------

function combineAllArrays(...arrays) {
  console.log(arrays.flat())
  return arrays.flat();
}

combineAllArrays([10, 12], [5, 4]);
combineAllArrays([10, 12], [5, 4], [6, 6, 6]); 



//📌 7. Reducing
//----------------------------------------------------------------------------------------------------------

function addOnlyNumbers(...inputs) {
    const numbers = inputs.filter(input => typeof input === 'number');
    const sum = numbers.reduce((prev, curr) => prev + curr, 0);
    console.log(`Er waren ${inputs.length} argumenten, de som van de getallen is ${sum}`);

    return sum;
}

addOnlyNumbers(1, 5, 6, "cat", "dog", 3);

//DESTRUCTING
//📌 1. Destructuring met Arrays
//----------------------------------------------------------------------------------------------------------

const letters = ["A", "B", "C"];

const [firstLetter, secondLetter, thirdLetter] = letters;
console.log(firstLetter);
console.log(secondLetter);
console.log(thirdLetter);

//📌 2. Destructuring met Geneste Arrays
//----------------------------------------------------------------------------------------------------------

const matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

const [[a], [,b], [,,c]] = matrix;

console.log(a, b, c);

//📌 3. Destructuring en Swap
//----------------------------------------------------------------------------------------------------------

let x = 5;
let y = 10;

// schrijf hier je code om x en y om te wisselen
[y, x] = [x, y];

console.log(x, y);

//📌 4. Destructuring met Strings
//----------------------------------------------------------------------------------------------------------

const sentence = "This is a sentence.";
// schrijf hier je code om de eerste letter en de rest van de letters toe te kennen aan variabelen
const [firstLetter1, ...restOfSentence] = sentence

console.log(firstLetter1, restOfSentence.join("")); // Output: T his is a sentence.

//📌 5. Destructuring in Functies
//----------------------------------------------------------------------------------------------------------

function multiply([a, b]) {
  return console.log(a * b);
}

multiply([3, 5]);
multiply([7, 2]);

//📌 6. Destructuring en Rest Parameter
//----------------------------------------------------------------------------------------------------------

const [first, second, ...rest] = [1, 2, 3, 4, 5]

console.log(first, second, rest); // Output: 1 2 [3, 4, 5]

//📌 7. Destructuring met Geneste Objecten
//----------------------------------------------------------------------------------------------------------

const person = {
  name: "John",
  age: 30,
  address: {
    street: "123 Main St",
    city: "Anytown",
  },
};

const { name, age, address: { street, city } } = person;

console.log(name, age, street, city);


//📌 8. Destructuring met Geneste Objecten
//----------------------------------------------------------------------------------------------------------

const book = { title: "JavaScript Basics", author: "John Doe" };

const { title = "", author = "", pages = 0 } = book;

console.log(title, author, pages);

