// oefening multiply
//oefening: Maak een functie showCalculation die 3 parameters heeft. 2 getallen en een van onze functies.
function sum(a, b) {
  return a + b;
}
function multiply(a, b) {
  return a * b;
}
function division(a, b) {
  return a / b;
}
function showCalculation(a = 0, b = 0, callback = sum) {
  //standaard declaratie meegeven aan parameters
  console.log(callback(a, b));
}

showCalculation(5, 69, sum); //2
showCalculation(9, 5, multiply); //1
showCalculation(5, 3, division); //5

const name = "adriaan";
const division = () => {};

const multiplier = function () {};

// oefening maak een random student

function selectRandomStudent(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const age = 21;
const students = ["Yme", "Arne", "Mert"];

console.log(sum(age, 12));
console.log(20);

console.log(selectRandomStudent(students));

function showMessage(message) {
  console.log("Answer Checker Message");
}

function checkAnswer(answer, solution, callback) {
  if (answer === solution) {
    callback("ok");
    return true;
  }
  callback("nok");
  return false;
}

checkAnswer("ja", "llk", showMessage);
