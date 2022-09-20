
const operand1 = document.querySelector('#operand1');
const operand2 = document.querySelector('#operand2');
const operation = document.querySelector('#operation');
const btn = document.querySelector('#myButton');
const solution = document.querySelector('#solution')

btn.addEventListener('click', onBtnClick);

function onBtnClick() {
    let result = 0;
    result = calculate(+operand1.value, +operand2.value);
    solution.textContent = `Результат:${operand1.value}${operation.value}${operand2.value} = ${result}`;
}
function calculate(a, b) { 
    
    switch (operation.value) {
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
