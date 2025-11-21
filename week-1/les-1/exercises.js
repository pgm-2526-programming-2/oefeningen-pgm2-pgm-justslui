//📌 1. Eenvoudige functie
//----------------------------------------------------------------------------------------------------------

// Functie die een vaste begroeting teruggeeft
function greetings1() {
  const message = "Hallo daar!";
  return message;
}

console.log(greetings1());

//📌 2. Functie met parameters
//----------------------------------------------------------------------------------------------------------

// Functie om iemand te begroeten
// name = de naam van de persoon die we willen begroeten
function greetings2(name) {
  const message = "Hallo daar " + name + "!";
  return message;
}

console.log(greetings2("Anna"));

//📌 3. Standaard parameters
//----------------------------------------------------------------------------------------------------------

// Functie om iemand te begroeten
// name = de naam van de persoon, standaard "daar" als er geen naam wordt meegegeven
function greetings3(name = "daar") {
  const message = "Hallo " + name + "!";
  return message;
}

console.log(greetings3());

//📌 4. Functie met parameters en interne logica
//----------------------------------------------------------------------------------------------------------

// Functie om te controleren of iemand volwassen is
// age = de leeftijd die we willen controleren
function controlAge(age) {
  if (age >= 18) {
    //Als leeftijd 18 of ouder
    return "Volwassen"; //Geef terug "Volwassen"
  }
  return "Niet volwassen"; //Anders, geef terug "Niet volwassen"
}

console.log(controlAge(16));
console.log(controlAge(21));

//📌 5. Return
//----------------------------------------------------------------------------------------------------------

function checkAge(age) {
  if (age > 18) {
    return true;
  } else {
    return "Did parents allow you?";
  }
}

function checkAge(age) {
  if (age > 18) {
    return true;
  }
  // Werkt deze functie nog zoals verwacht?
  // Answer: Ja, deze zal nog werken omdat als de "age" groter is dan 18 zal die automatisch doorgaan naar de volgende stelling omdat de eerste stelling true of false kan zijn. Als die false is zal die doorgaan naar de enige andere optie.
  return "Did parents allow you?";
}

console.log(checkAge(12));

//📌 6. Callback
//----------------------------------------------------------------------------------------------------------

// Dit is de hoofdlogica die we willen uitvoeren als callback.
// message =  de tekst die we willen laten zien.
function mainLogic(message) {
  console.log(message);
}

// Dit is de functie die een andere functie (callback) kan uitvoeren
// callback = de functie die we willen aanroepen binnen callBackFunction
function callBackFunction(callback) {
  callback("Dit is de callback-functie");
}

// Hier geven we mainLogic als callback door aan callBackFunction
// mainLogic wordt uitgevoerd met de boodschap "Dit is de callback-functie"
callBackFunction(mainLogic);

//📌 7. Pass by
//----------------------------------------------------------------------------------------------------------

let myNumber1 = 20; // Eerste getal, hier doen we later iets mee
let myNumber2 = 20; // Tweede getal, los van het eerste getal

// Functie die een getal neemt en een berekening toepast
// number = getal dat we gaan bewerken
// calc = de functie die bepaalt welke berekening we doen
function calculation(number = 0, calc = increaseByTen) {
  return calc(number); // Pas de functie toe op het getal en geef het resultaat terug
}

// Functie die het getal vermenigvuldigt met 10.
function increaseByTen(number) {
  return number * 10;
}

// Functie die 10 optelt bij het getal
function plusTen(number) {
  return number + 10;
}

// Pas de functie increaseTen toe op myNumber1 en sla het resultaat op in myNumber1.
myNumber1 = calculation(myNumber1, increaseByTen);
// Pas de functie plusTen toe op myNumber2 en sla het resultaat op in myNumber2.
myNumber2 = calculation(myNumber2, plusTen);

console.log("Number:", myNumber1);
console.log("Number:", myNumber2);

//📌 8. Scope
//----------------------------------------------------------------------------------------------------------

// Globale variabele buiten de functie
const global = "green"; // Dit is zichtbaar overal buiten de functie

// Functie waarin we een lokale variabele met dezelfde naam maken
function myGlobal() {
  const global = "blue"; // Dit is alleen zichtbaar binnen deze functie (lokale variabele)
  return global;
}

// Toon de globale variabele
console.log(global); // toont "green" – de globale variabele wordt gebruikt buiten de functie
// Roep de functie aan en toon de lokale variabele
console.log(myGlobal()); // toont "blue" – de lokale variabele binnen de functie overschrijft de globale niet

//📌 9. Todo list
//----------------------------------------------------------------------------------------------------------

const todoList = [
  {
    task: "Complete Project",
    subtasks: [
      {
        task: "Write Code",
        subtasks: [
          { task: "Implement Feature A" },
          { task: "Test Feature A" },
          { task: "Refactor Code" },
        ],
      },
      {
        task: "Document Project",
        subtasks: [{ task: "Write Readme" }, { task: "Create Documentation" }],
      },
    ],
  },
  {
    task: "Prepare Presentation",
    subtasks: [{ task: "Create Slides" }, { task: "Practice Delivery" }],
  },
];

function showTasklist(list) {
  // Loop door elk item in de lijst van taken
  for (const item of list) {
    console.log("● " + item.task); // Toon de hoofdtaken

    // Controleer of er subtasks zijn voor dit item
    if (item.subtasks) {
      // Loop door de eerste laag subtasks, als er subtasks zijn
      for (const subItem of item.subtasks) {
        console.log("● " + subItem.task); // Toon de subtasks

        // Controleer of er nog diepere subtasks zijn
        if (subItem.subtasks) {
          // Loop door de tweede laag subtasks, controleer op nog diepere subtasks
          for (const subSubItem of subItem.subtasks) {
            console.log("● " + subSubItem.task); // Toon de diepere subtasks
          }
        }
      }
    }
  }
}

showTasklist(todoList);

//📌 9.1 Efficient JS gebruiken
//----------------------------------------------------------------------------------------------------------

// ● Variant 1: met ?-operator
function checkAgeTernary(age) {
  // Hier check je eerst: is de leeftijd groter dan 18?
  // Als dat waar is, return iets; anders return iets anders
  return age > 18 ? "Volwassen" : "Did your parents allow you?";
}

console.log(checkAgeTernary(20));
console.log(checkAgeTernary(16));

//● Variant 2: met || (OR) -operator
function checkAgeOr(age) {
  // Hier wil je true teruggeven als één van de voorwaarden waar is:
  //- age > 18
  //- volwassen (true)
  return age > 18 || "Computer says no";
}

console.log(checkAgeOr(24));
console.log(checkAgeOr(12));

// 💡 Uitleg:
//----------------------------
//● Ternary (?)
//- Handig voor korte beslissingen in één regel.
// “Als dit waar is, return dit; anders return dat.”

//● OR-operator (||)
// Controleert of ten minste één van de twee dingen waar is.
// Als de eerste waar is, hoeft de tweede niet meer te worden uitgevoerd.

//📌 9.2 Dropdown
//----------------------------------------------------------------------------------------------------------
