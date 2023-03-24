// DOM //

const output = document.querySelector(".display");
const buttonNumbers = document.querySelectorAll(".numbers");
const operators = document.querySelectorAll(".operators");
const displayResult = document.createElement("span");
const buttonEqual = document.querySelector(".equal");

// DOM //

// variables
let firstNumber = "";
let secondNumber = "";
let clickedOperator = "";
let storedNumber = "";
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
      return divide(x, y);
  }
}
