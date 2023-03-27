// DOM //

const output = document.querySelector(".display");
const buttonNumbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const displayResult = document.createElement("span");
const buttonEqual = document.querySelector(".equal");
const allClearButton = document.querySelector(".all-clear-button");
const clearOneCharacterButton = document.querySelector(".clear");
const decimalButtonNumber = document.querySelector(".decimal-operator");

// DOM //

// variables
let firstNumber = "";
let secondNumber = "";
let clickedOperator = "";
let storedString = "";
let displayValue = "";
let result = 0;
let decimalAllowed = false;
let count = 0;
// functions for add, subtract, multiply,  and divide.
const add = function (a, b) {
  result = a + b;
  return result;
};

const subtract = function (a, b) {
  result = a - b;
  return result;
};
const multiply = function (a, b) {
  result = a * b;
  return result;
};

const divide = function (a, b) {
  result = a / b;
  return result;
};

// function for calculation and also so that
// javascript can now witch operator button I have clicked,
// and based on that it will know what operation to call.
function calculate(x, y, operator) {
  x = firstNumber;
  y = secondNumber;
  operator = clickedOperator;
  switch (operator) {
    case "+":
      return add(x, y);
    case "-":
      return subtract(x, y);
    case "*":
      return multiply(x, y);
    case "/":
      if (secondNumber === 0) {
        output.style.fontSize = "3em";
        return (output.textContent = "Error!");
      } else {
        return divide(x, y);
      }
  }
}

//event listener for keyboard support
window.addEventListener("keydown", function (e) {
  const key = document.querySelector(`button[data-key='${e.keyCode}']`);
  key.click();
});

// function to display first and second number on the display
buttonNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (clickedOperator === "" && decimalAllowed === false) {
      displayValue += button.value;
      output.textContent = displayValue;
      displayValue = parseInt(displayValue);
      firstNumber = parseInt(firstNumber);
    } else if (clickedOperator === "" && decimalAllowed === true) {
      displayValue += button.value;
      output.textContent = displayValue;
      displayValue = parseFloat(displayValue);
      firstNumber = parseFloat(firstNumber);
    } else if (clickedOperator !== "" && decimalAllowed === true) {
      displayValue += button.value;
      secondNumber = displayValue;
      output.textContent = displayValue;
      displayValue = parseFloat(displayValue);
      secondNumber = parseFloat(secondNumber);
    } else if (clickedOperator !== "" && decimalAllowed === false) {
      displayValue += button.value;
      secondNumber = displayValue;
      output.textContent = displayValue;
      displayValue = parseInt(displayValue);
      secondNumber = parseInt(secondNumber);
    }
  });
});

// function to display different operators to the display
operators.forEach((operator) => {
  operator.addEventListener("click", () => {
    if (clickedOperator === "") {
      firstNumber = displayValue;
      displayValue = "";
      clickedOperator = operator.value;
      count--;
    } else {
      secondNumber = displayValue;
      result = calculate();
      clickedOperator = operator.value;
      displayValue = result;
      output.textContent = displayValue;
      firstNumber = displayValue;
      displayValue = "";
    }
  });
});

// function that add's functionality to the 'equal' button
buttonEqual.addEventListener("click", () => {
  output.textContent = "";
  result = calculate(); //result = Math.round(result*100)
  output.textContent = result;
});

// function that clears all inputs
allClearButton.addEventListener("click", () => {
  location.reload();
});

// function that clears only one number at the time from  the input
clearOneCharacterButton.addEventListener("click", () => {
  storedString = displayValue.toString().split("").slice(0, -1).join("");
  if (storedString.length >= 1) {
    displayValue = parseInt(storedString);
    secondNumber = displayValue;
    output.textContent = displayValue;
  } else {
    displayValue = parseInt(storedString);
    document.getElementById("disabled").disabled = true;
  }
});

//function for decimal numbers
decimalButtonNumber.addEventListener("click", (e) => {
  decimalAllowed = true;
  if (decimalAllowed === true && count > 0) {
    document.getElementById("disabled").disabled = true;
  } else {
    displayValue += e.target.value;
    count++;
    output.textContent = displayValue;
  }
});
