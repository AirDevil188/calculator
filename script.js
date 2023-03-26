// DOM //

const output = document.querySelector(".display");
const buttonNumbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const displayResult = document.createElement("span");
const buttonEqual = document.querySelector(".equal");
const allClearButton = document.querySelector(".all-clear-button");

// DOM //

// variables
let firstNumber = "";
let secondNumber = "";
let clickedOperator = "";
let storedNumber = "";
let displayValue = "";
let result = 0;
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

// function to display first and second number on the display
buttonNumbers.forEach((button) => {
  button.addEventListener("click", () => {
    if (clickedOperator === "") {
      displayValue += button.value;
      output.textContent = displayValue;
      displayValue = parseInt(displayValue);
      firstNumber = parseInt(firstNumber);
    } else {
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
  result = calculate();
  output.textContent = result;
});

allClearButton.addEventListener("click", () => {
  location.reload();
});

// 12 + 7 - 5 * 3
