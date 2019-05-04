import "./styles.css";

document.getElementById("app").innerHTML = `
<input type="text" class="firstInput">
<input type="text" class="secondInput">
<button>click me</button
`;

// alert("lalala");

// let's do some math!
const apples = 5;
const pears = 2;

const fruit = apples + pears;

console.log("fruit: " + fruit);

// let's make a button event
const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", function() {
  console.log("meep!");
  body.classList.toggle("colorChange");
  button.classList.toggle("fontChange");
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
