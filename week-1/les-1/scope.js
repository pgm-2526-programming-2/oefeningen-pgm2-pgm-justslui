const message = "Hey daar!"; //globale scope vermijden, werken met argumenten en parameters.

function sayHello() {
  const message = "Bye!";

  const say = function () {
    const newMessage = "YOLO";
    console.log(message);
  };

  console.log(message);
  say();
}

sayHello();
console.log(message);
