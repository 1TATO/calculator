const input = document.getElementById("input");
const numbers = document.querySelectorAll(".number");
const action = document.querySelectorAll(".action");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");

const decimal = document.querySelector(".decimal")


for (const number of numbers) {
  number.addEventListener("click", handleNumber);
}

function handleNumber(event) {
  if (input.innerHTML.length <= 13) {
    if (input.innerHTML === "0") {
      input.innerHTML = "";
    }

    input.innerHTML += event.target.innerHTML;
  }
}

clear.addEventListener("click", handleClear);

function handleClear() {
  input.innerHTML = "0";
}
