//ARRAYS
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

//📌 5. Methods - strings
//----------------------------------------------------------------------------------------------------------
const woorden = [
  "mal",
  "snurkduif",
  "bromvlieg",
  "snottebel",
  "knotsgek",
  "pindakaas",
  "fluitketel",
  "smurfenmuts",
];
// Maak een string door alle elementen in de array te verbinden met een koppelteken.

console.log(woorden.join("-"));

// Controleer of ten minste één woord in de array begint met de letter “B”.

const wordWithB = woorden.filter((woord) => {
  return woord.startsWith("b");
});

console.log(wordWithB);

// Voeg het woord “Hello” toe aan het begin van de array.

woorden.unshift("Hello");

// Controleer of alle woorden in de array meer dan twee letters hebben.

const wordWithTwo = woorden.every((woord) => {
  return woord.length > 2;
});

console.log(wordWithTwo);

// Sorteer de array in oplopende volgorde.

const sorted = woorden.sort();

console.log(sorted);

// Haal het element op de derde positie in de array op.

const thirdElement = woorden[2];

console.log(thirdElement);

// Filter de woorden die langer zijn dan vier letters uit de array.

const wordWithFour = woorden.filter((woord) => {
  return woord.length > 4;
});

console.log(wordWithFour);

//📌 6. Methods - numbers
//----------------------------------------------------------------------------------------------------------

const willekeurigeGetallen = [23, 7, 45, 12, 87, 3, 56, 19, 34, 91];

// Filter de getallen groter dan 10 uit de array.

const biggerTen = willekeurigeGetallen.filter((number) => number > 10);
console.log(biggerTen);
// Verwijder het laatste element uit de array.

const deleteLast = willekeurigeGetallen;
deleteLast.pop();
console.log(deleteLast);
// Verwijder het eerste element uit de array.

const deleteFirst = willekeurigeGetallen;
deleteFirst.shift();
console.log(deleteFirst);

// Voeg het getal 5 toe aan het einde van de array.

const addFive = willekeurigeGetallen;
addFive.push(5);
console.log(addFive);

// Controleer of alle getallen in de array kleiner zijn dan 20.

const numSmaller = willekeurigeGetallen.every((n) => n < 20);
console.log(numSmaller);

// Maak een string door alle elementen in de array te verbinden met een spatie.

const stringSpace = willekeurigeGetallen.join(" ");
console.log(stringSpace);

// Tel alle getallen in de array op.

const sum = willekeurigeGetallen.reduce((total, n) => total + n);
console.log(sum);

// Verdubbel elk getal in de array.

const double = willekeurigeGetallen.map((n) => n * 2);
console.log(double);

// Controleer of ten minste één getal in de array groter is dan 30.

const biggerThir = willekeurigeGetallen.some((n) => n > 30);
console.log(biggerThir);

//📌 7. Methods - subarrays
//----------------------------------------------------------------------------------------------------------

//📌 8. Optellen arrays
//----------------------------------------------------------------------------------------------------------

//📌 9. Langste woord in array
//----------------------------------------------------------------------------------------------------------

//📌 10. Even getallen filteren
//----------------------------------------------------------------------------------------------------------

function filterEvenGetallen(getallen) {
  return getallen.filter((n) => n % 2 === 0);
}

let willekeurigeGetallen2 = [3, 8, 15, 6, 10, 7];
let evenGetallen = filterEvenGetallen(willekeurigeGetallen2);
console.log(evenGetallen);

// ADVANCED
//📌 11. Sorteren op object eigenschap
//----------------------------------------------------------------------------------------------------------

//OBJECTS
//📌 1. Oefening Auto
//----------------------------------------------------------------------------------------------------------

const auto = {
  merk: "Toyota",
  model: "Camry",
  jaar: 2002,
  kleur: "blauw",
};

// Eigenschap wijzigen

auto.kleur = "rood";

// Waarde ophalen

console.log(auto.merk);

// Eigenschap toevoegen

auto.brandstof = "benzine";

// Eigenschap verwijderen

delete auto.jaar;

console.log(auto);

//📌 2. Oefening Persoon
//----------------------------------------------------------------------------------------------------------

const person = {
  naam: "Anna",
  leeftijd: 25,
  adres: {
    straat: "Hoofdstraat",
    nummer: 123,
    stad: "Stadsville",
  },
};

// Schrijf een script dat het straatnummer van het adres-object in de vorige oefening ophaalt en weergeeft in de console.
console.log(person.adres.nummer);

// Breid het object persoon uit door de eigenschap telefoon toe te voegen met een willekeurig telefoonnummer.
person.telefoon = 324123;
console.log(person);

// Maak een nieuw object genaamd extraInfo met willekeurige extra informatie (bijvoorbeeld hobby, favorieteKleur, enz.). Voeg deze informatie toe aan het object persoon.

//📌 3. Oefening Auto
//----------------------------------------------------------------------------------------------------------

//📌 4. Oefening Auto
//----------------------------------------------------------------------------------------------------------
