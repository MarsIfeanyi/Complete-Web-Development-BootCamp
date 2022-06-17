/**
 * Higher Order Functions are functions that takes other functions as inputs.
 *
 */

function add(num1, num2) {
  return num1 + num2;
}

function multiply(num1, num2) {
  return num1 * num2;
}

function subtract(num1, num2) {
  return num1 - num2;
}
function divide(num1, num2) {
  return num1 / num2;
}

//Higher Order function
function calculator(num1, num2, operator) {
  return operator(num1, num2);
}

//Calling the functions
const calcAdd = calculator(4, 5, add);
console.log(calcAdd);

const calcMultiply = calculator(4, 5, multiply);
console.log(calcMultiply);

const calcSubtract = calculator(20, 10, subtract);
console.log(calcSubtract);

const calcDivide = calculator(100, 50, divide);
console.log(calcDivide);
