let oprand1 = 0;
let oprand2 = 0;
let operator = '';

function add(num1, num2){
  return num1 + num2;
}

console.log(add(1, 1));

function subtract (num1, num2) {
  return num1 - num2
}

console.log(subtract(2, 1));

function multiply (num1, num2) {
  return num1 * num2;
}

console.log(multiply(2, 5));

function divide (num1, num2) {
  return num1 / num2
}

console.log(divide(10,2));

function operate (num1, num2, op) {
  if (op === '+') return add(num1, num2);
  if (op === '-') return add(num1, num2);
  if (op === '*') return add(num1, num2);
  if (op === '/') return add(num1, num2);
}