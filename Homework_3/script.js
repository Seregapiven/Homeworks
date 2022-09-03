let operand;

do {
  operand = prompt('Введите число: ');
} while (isNumberInvalid(operand));
  operand = Number(operand);

  alert('Сумма четных чисел: ' + sumEvenNumbers(operand));
alert('Сумма нечетных чисел: ' + sumOddNumbers(operand));

function isNumberInvalid(val) {
  return val === null || val <= 0 || val.trim() === '' || isNaN(val);
}
function sumOddNumbers(number) {
  let sum = 0;
  for (let i = 1; i <= number; i+=2) {
    sum += i;
  }
  return sum;
}
function sumEvenNumbers(number) {
  let sum = 0;
  for (let i = 2; i <= number; i+=2) {
    sum += i;
  }
  return sum;
}




