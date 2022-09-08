const action = getAction('Выберите значение (+, -, * или /)');
const str = getOperands('Введите операнды через запятую');
let array;
let result;

function calculate(a, b) {
  switch (action) {
    case '+':
      return a + b;
    case '-':
      return a - b;
    case '*':
      return a * b;
    case '/':
      return a / b;
  }
}
function isActionValid(action) {
  return action === '+' || action === '-' || action === '*' || action === '/';
}
function isNumber(val) {
  return !(val === null || val.trim() === '');
}
function getAction(title) {
  let action;
  do {
    action = prompt(title);
  } while (!isActionValid(action));
  return action;
}
function getOperands(title) {
  let str;
  do {
    str = prompt(title);
  } while (!isNumber(str));
  return str;
}

array = str.split(',');
result = +array[0];
for (let i = 1; i < array.length; i++) {
  result = calculate(result, +array[i]);
}
alert(result);