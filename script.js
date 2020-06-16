const input = document.getElementById("input");
const numbers = document.querySelectorAll(".number");
const equal = document.getElementById("equal");
const clear = document.getElementById("clear");
const backspace = document.getElementById("backspace");

const decimal = document.querySelector(".decimal")

const plus = document.querySelector('.plus')
const minus = document.querySelector('.minus')
const times = document.querySelector('.times')
const divider = document.querySelector('.divider')
const percentage = document.querySelector('.percentage')

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

backspace.addEventListener("click", back);

function back() {
  const value = input.innerHTML;

  if (value.length === 1) {
    input.innerHTML = "0";
  }
  else {
    const newValue = value.substring(0, (value.length - 1))

    input.innerHTML = newValue;
  }
}

decimal.addEventListener("click", displayDecimal)

function displayDecimal() {
  if (!input.innerHTML.includes(".")) {
    input.innerHTML += ".";
  }
}

plus.addEventListener("click", plusFunction)

function plusFunction() {
  if (!input.innerHTML.includes("+")) {
    input.innerHTML += "+";
  }
}

minus.addEventListener("click", minusFunction)

function minusFunction() {
  if (!input.innerHTML.includes("-")) {
    input.innerHTML += "-";
  }
}

times.addEventListener("click", timesFunction)

function timesFunction() {
  if (!input.innerHTML.includes("*")) {
    input.innerHTML += "*";
  }
}

divider.addEventListener("click", dividerFunction)

function dividerFunction() {
  if (!input.innerHTML.includes('÷')) {
    input.innerHTML += '÷';
  }
}

percentage.addEventListener("click", percentageFunction)

function percentageFunction() {
  if (!input.innerHTML.includes("%")) {
    input.innerHTML += "%";
  }
}

equal.addEventListener("click", result)

function result() {
  const array = input.innerHTML.split('')

  switch (array[1]) {
    case "+":
      input.innerHTML = (parseInt(array[0]) + parseInt(array[2]))
      break;
    case "-":
      input.innerHTML = (parseInt(array[0]) - parseInt(array[2]))
      break;
    case "*":
      input.innerHTML = (parseInt(array[0]) * parseInt(array[2]))
      break;
    case "÷":
      input.innerHTML = (parseInt(array[0]) / parseInt(array[2]))
      break;
    case "%":
      input.innerHTML = (parseInt(array[0]) / 100)
      break;
  }
}
