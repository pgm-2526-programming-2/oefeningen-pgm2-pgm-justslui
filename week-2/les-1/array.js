const games = ["Super Mario Bros", "Zelda", "N+ Game", "Pokémon"];
const favoriteGames = [
  {
    name: "Super Mario Bros",
    releaseYear: 1980,
  },
  {
    name: "Zelda",
    releaseYear: 1984,
  },
]; //array altijd in meervoud schrijven
const altGames = new Array();
Array.isArray(games); // Geeft "true" terug.

const secondGame = games[1]; // Neemt het 2de element vd array
const altSecondGame = games.at(1); // Neemt ook het 2de element, at methode heeft handige manier van denken.
const lastGame = games.at(-1); // Doet hetzelfde als games[length -2];

const values = [
  "Adriaan",
  function () {
    console.log("Hello!");
  }, // Je kan in arrays ook functies in schrijven
];

const amountOfFavoriteGames = favoriteGames.length;

games.length = 3;
const topThree = games;

games.length = 4;

const stringArray = "[1, 2, 3, 4]";

const numbers = JSON.parse(stringArray);
console.log(typeof stringArray, typeof array);

// stringArray.push(5); // gaat niet, je kan niet pushen op een string
numbers.push(5);
console.log(stringArray, numbers);

const numberString = JSON.stringify(numbers); // nu krijg je een array als string terug
console.log(stringArray, numbers, numberString);

const students = ["Nick", "Mert", "Jens"];
const people = ["Nick", "Mert", "Jens"];

const teacher = "Adriaan";
const friend = "Adriaan";

console.log(students === people); // dit returned False omdat het andere referenties zijn
console.log(teacher === friend); // dit returned "True"

// // Oefening

// // function areArraysEqual(a, b) {
// //   const string1 = JSON.stringify();
// //   const string2 = JSON.stringify();
// //   console.log(a === b);
// // }
// // areArraysEqual(students, people);

// function areArraysEqual(one, two) {
//     if (arrOne.length !== arrTwo.length){
//         return false;
//     }
//     // const first = JSON.stringify(one)
//     // const second = JSON.stringify(two)

//     // if (first === second) {
//     //     return true;
//     // }
//     // return first === second;
//     return JSON.stringify(arrOne) === JSON.stringify(arrTwo)

// }

// console.log(areArraysEqual(students, people));

const matrix = [
  ["0", "0", "0", "0"], // shift + alt + pijltje om te kopieren
  ["0", "X", "0", "0"],
  ["0", "0", "0", "0"],
  ["0", "0", "0", "0"],
];

matrix[1][1];

const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log(color);
}

colors.forEach((color) => {
  console.log(color);
});

colors.forEach(function (color) {
  console.log(color);
});

colors.push("Purple"); // toevoegen aan eind
colors.pop(""); // Verwijderen aan eind
colors.unshift(""); // aan begin van array toevoegen
colors.shift(""); // aan begin verwijderen

console.log("Numbers:", numbers);
const doubleNumbers = numbers.map((value, index) => {
  // Mappen gaat loopen en aanpassen
  return value * 2;
});
console.log("Double numbers:", doubleNumbers);

console.log("Double numbers:", doubleNumbers.join(", "));

const numbersWithoutEight = doubleNumbers.filter((value) => {
  return value !== 8; // iets uit de array filteren, heel belangrijk!!
});
console.log(numbersWithoutEight);

numbers.some((number) => {
  // "some" methode returned True of False
  return number === 8;
});

numbers.every((number) => {
  return number === 8;
});

// Reduce -> minder maken
// Van array naar 1 getal te gaan (meestal som/optelling)

const sales = [4, 10, 6];

sales.reduce((prevValue, currentValue) => {
  return prevValue + currentValue;
});

//Loop 1: 0 + 4 -> 4
//Loop 2: 4 + 10 -> 14
//Loop 3: 14 + 6 -> 20

const products = [
  { name: "shirt", price: 20 },
  { name: "shoes", price: 50 },
  { name: "hat", price: 15 },
];

const totalProductsPrice = products.reduce(
  (prevReturnedPrice, productObject) => {
    return prevReturnedPrice + productObject.price;
  },
  0 // Standaardwaarde aan meegeven
);

console.log(totalProductsPrice);
