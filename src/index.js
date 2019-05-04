import "./styles.css";

document.getElementById("app").innerHTML = `
<input type="text" class="firstInput">
<input type="text" class="secondInput">
<button>click me</button
`;

// alert("lalala");

const apples = 5;
const pears = 2;

const fruit = apples + pears;

console.log("fruit: " + fruit);

const button = document.querySelector("button");
const body = document.querySelector("body");

button.addEventListener("click", function() {
  console.log("meep!");
  body.classList.toggle("colorChange");
  button.classList.toggle("fontChange");
});
