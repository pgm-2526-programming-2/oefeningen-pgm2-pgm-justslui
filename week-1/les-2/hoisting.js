// console.log(firstName);
// console.log(lastName);
// console.log(age);
// const firstName = "Adriaan";
// let age = 30;
// var lastName = "Glibert";

// var lastName; //wordt eerst gedeclareerd
// lastName = "Glibert"; // daarna pas een waarde aan gegeven (hoe de pc werkt met "var")

showMessage();

function showMessage() {
  console.log("Hello world!");
}

const showAnotherMessage = function () {
  console.log("Another world");
};

const showArrowMessage = () => {};

showAnotherMessage();
