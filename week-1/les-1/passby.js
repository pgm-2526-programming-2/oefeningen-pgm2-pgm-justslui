// const firstName = "Jan"; //primitief
// const age = 20; //primitief
// const isStudent = true; //primitief
// const hobbies = ["gaming", "Biking"]; //samengesteld of reference
// const address = {
//   street: "New York straat",
//   number: 4,
// }; //samengesteld of reference

// let nickName = firstName;
// const interests = hobbies;

// nickName = "Gamerboi";
// interests.push("Pokémon");

// console.log(interests, hobbies);

let total = 0;

function addFiveToNumber(a = 0) {
  total = a + 5;
  console.log(a + 5);
}

addFiveToNumber(2);
console.log("Totaal:", total);

function doubleNumber(n) {
  n = n * 2;
  console.log("Binnen functie:", n);
}

let originalNumber = 5; //primitief

function doubleNumberWithReference(obj) {
  obj.number = obj.number * 2;
  console.log("Binnen ref-functie:", obj.number);
}

let originalNumberAsReferenceType = {
  number: 5,
};

doubleNumberWithReference(originalNumberAsReferenceType);
doubleNumber(originalNumber);

console.log("Original number uit functie: ", originalNumber);
console.log(
  "Original number uit ref-functie: ",
  originalNumberAsReferenceType.number
);
