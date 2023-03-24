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
