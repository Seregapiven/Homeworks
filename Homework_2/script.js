let firstNumber; // Первое число
let secondNumber; // Второе число
let operation;
let result; // Результат операций
// ввод данных
do {
  firstNumber = prompt('Введите первое число');
} while (isNumberInvalid(firstNumber));
firstNumber = Number(firstNumber); // Перевод в тип Number

do {
  secondNumber = prompt('Введите второе число');
} while (isNumberInvalid(secondNumber));
secondNumber = Number(secondNumber); // Перевод в тип Number
 
do {
  operation = prompt(`Выберете значение (+, -, * или /)`);
  } while(isOperationInvalid(operation));

// Функции для проверки валидности введеных данных
  function isNumberInvalid(val){
    return val === null || val === '' || isNaN(val);
  }
  function isOperationInvalid(val){
  return !(operation == '+' || operation == '-' || operation == '*' || operation == '/');
}
// Результат вычислений
  switch (operation) {
    case '+':
      result = firstNumber + secondNumber;
      alert(`${firstNumber} + ${secondNumber}= ${result}`);
      break
    case '-':
      result = firstNumber - secondNumber;
      alert(`${firstNumber} - ${secondNumber}=${result}`);
      break
    case '*':
      result = firstNumber * secondNumber;
      alert(`${firstNumber} * ${secondNumber}=${result}`);
      break
    case '/':
      result = firstNumber / secondNumber;
      alert(`${firstNumber} / ${secondNumber}=${result}`);
      break;
  }




