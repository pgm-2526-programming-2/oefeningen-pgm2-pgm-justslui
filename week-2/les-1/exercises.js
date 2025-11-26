//📌 1. Dagen van de week
//----------------------------------------------------------------------------------------------------------

const daysOfWeek = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday",
];

for (const element of daysOfWeek) {
  const currentDay = element;
  console.log(currentDay);
}

//📌 2. Array waarde
//----------------------------------------------------------------------------------------------------------

let fruits = ["Apples", "Pear", "Orange"];

// push a new value into the "copy"
let shoppingCart = fruits;
shoppingCart.push("Banana");

// what's in fruits?
console.log(fruits); // Banana zal hier aan worden toegevoegd

//📌 3. Multidimensional arrays
//----------------------------------------------------------------------------------------------------------

const matrix = [
  ["1", "2", "3"],
  ["4", "5", "6"],
];

function getNumber(column, row) {
  return matrix[column - 1][row - 1];
}

console.log(getNumber(2, 1));

//📌 4. For of, foreach
//----------------------------------------------------------------------------------------------------------

//Gebruik for…of om elk element in de array numbers te loggen.
//......................................................

let numbers = [1, 2, 3, 4, 5];

for (const item of numbers) {
  console.log(item);
}

//Gebruik for…of om elk karakter in de string “Hello” te loggen.
//......................................................

for (const element of numbers) {
  numbers = "Hello!";
  console.log(numbers);
}

//Gebruik forEach om elk element in de array colors te loggen,
//samen met het bijbehorende indexnummer.
//......................................................

const colors = ["red", "blue", "green", "yellow"];

colors.forEach((element, index) => {
  const number = index + 1;
  console.log(`${element} [${number}]`);
});

//📌 5. For of, foreach
//----------------------------------------------------------------------------------------------------------
//📌 6. For of, foreach
//----------------------------------------------------------------------------------------------------------
//📌 7. Methods - subarrays
//----------------------------------------------------------------------------------------------------------
//📌 8. Optellen arrays
//----------------------------------------------------------------------------------------------------------
//📌 9. Langste woord in array
//----------------------------------------------------------------------------------------------------------
//📌 10. Even getallen filteren
//----------------------------------------------------------------------------------------------------------

// ADVANCED
//📌 11. Sorteren op object eigenschap
//----------------------------------------------------------------------------------------------------------
//📌 12. Kruiswoordraadsel
//----------------------------------------------------------------------------------------------------------
