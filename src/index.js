import "./styles.css";

document.getElementById("app").innerHTML = `
<input type="text" class="firstInput">
<input type="text" class="secondInput">
<button>click me</button
`;

// yay! pop ups!
// alert("lalala");

// let's do some math!
const apples = 5;
const pears = 2;

const fruit = apples + pears;

console.log("fruit: " + fruit);

// let's make a button event
const button = document.querySelector("button");
const body = document.querySelector("body");

const firstInput = document.querySelector(".firstInput");
const secondInput = document.querySelector(".secondInput");

button.addEventListener("click", function() {
  console.log("meep!");

  // change colors
  body.classList.toggle("colorChange");
  button.classList.toggle("fontChange");

  // get value from input field
  const input1 = firstInput.value;
  const input2 = secondInput.value;
  console.log("firstInput " + input1);
  console.log("secondInput " + input2);

  const output = input1 + " " + input2;
  console.log("output " + output);
});

// some logical operators
const a = 20;
const b = 20;
const c = 10;

if (a <= b && c < a) {
  console.log("yay!");
} else {
  console.log("nope!");
}

// set value of text field

button.addEventListener("mouseover", function() {
  console.log("hover!");
  const input1 = firstInput.value;
  secondInput.value = input1;
});

// some logical operators
const a = 20;
const b = 20;
const c = 10;

if (a <= b && c < a) {
  console.log("yay!");
} else {
  console.log("nope!");
}
