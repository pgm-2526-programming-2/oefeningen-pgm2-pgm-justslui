// oproepen van eigen functie

let amountOfMessages = 0;

function showMessage() {
  console.log("Hoi");

  amountOfMessages = amountOfMessages + 1; // of ++ kan ook genoteerd worden

  if (amountOfMessages === 10) return; //variant op hieronder

  //   if (amountOfMessages === 10) {
  //     return;
  //   }

  showMessage(); //infinite loop
}

// showMessage();

//use cases? Maken van menu met submenus die hebben weer submenus,... (complexe dropdowns)
// tree -> omvormen naar lijst

//boomstructuur

const menu = [
  {
    name: "Home",
    path: "/",
  },
  {
    name: "explore",
    path: "/explore",
    subpages: [
      {
        name: "awards",
        path: "/awards",
        subpages: [
          {
            name: "nominees",
            path: "/nominees",
          },
          {
            name: "sites of the day",
            path: "/sotd",
          },
        ],
      },
    ],
  },
];

//oefening:

//log de pagina's en hun path in de console.
//1. zonder recursie, met loops

function showMenu(list) {
  for (const item of menu) {
    console.log("• name: ", item.name, "• path: ", item.path);

    if (item.subpages) {
      for (const subitem of item.subpages) {
        console.log("• name:", subitem.name, "• path:", subitem.path);

        if (subitem.subpages) {
          for (const subitems of subitem.subpages) {
            console.log("• name:", subitems.name, "• path:", subitems.path);
          }
        }
      }
    }
  }
}

// showMenu(menu);

//2. met recursie

function showMenuWithRecursion(list) {
  for (const item of list) {
    console.log("• name: ", item.name, "• path: ", item.path);

    if (item.subpages) {
      showMenuWithRecursion(item.subpages);
    }
  }
}

showMenuWithRecursion(menu);
