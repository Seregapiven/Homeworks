let action;
let quantityNumbers;
let string = '';
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
    return !(val === null || val.trim() === '' || isNaN(val));
}


do {
    action = prompt('Выберите значение (+, -, * или /)');
} while (!isActionValid(action));

do {
    quantityNumbers = prompt('Введите количество операндов');
} while ((!isNumber(quantityNumbers)) || (+quantityNumbers < 2));

for (let i = 0; i < quantityNumbers; i++) { 
    let number;
    do {
        number = prompt(`Введите ${i+1} число`);
    } while (!isNumber(number));
    if (i === 0) {
        result = +number;
    } else { 
        result = calculate(result, +number);
    }
    if (i === quantityNumbers - 1) {
        string = string + number + '=' + result
    } else { 
        string = string + number + action;
    }
}
console.log(string);

 

