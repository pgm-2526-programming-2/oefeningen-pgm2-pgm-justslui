sum(7, 4); //werkt
function sum(a, b) {
  return a + b;
}

// anotherSum(a, b) //werkt niet

// function expression
const anotherSum = function (a, b) {
  return a + b;
};

anotherSum(2, 3); //werkt

//arrow functions//deze zal niet worden gehoist

const arrowSum = (a, b) => {
  return a + b;
};
// geen curly braces? Return het statement. Enkel om te returnen
const altArrowSum = (a, b) => a + b;
