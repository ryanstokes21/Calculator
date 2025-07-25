let currentOperand = 0;
let previousOperand = 0;
let operator = '';

function add(num1, num2){
  return num1 + num2;
}

function subtract (num1, num2) {
  return num1 - num2
}

function multiply (num1, num2) {
  return num1 * num2;
}

function divide (num1, num2) {
  return num1 / num2
}

function operate (num1, num2, op) {
  if (op === '+') return add(num1, num2);
  if (op === '-') return add(num1, num2);
  if (op === '*') return add(num1, num2);
  if (op === '/') return add(num1, num2);
}