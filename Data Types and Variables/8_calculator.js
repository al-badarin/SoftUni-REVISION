function calculator(num1, operator, num2) {
  let result = 0;
  num1 = Number(num1);
  num2 = Number(num2);

  switch (operator) {
    case '+':
      result = num1 + num2;
      break;

    case '-':
      result = num1 - num2;
      break;

    case '/':
      if (num2 === 0) {
        console.log('Cannot divide by zero!');
        return;
      } else {
        result = num1 / num2;
      }
      break;

    case '*':
      result = num1 * num2;
      break;

    default:
      result = 'Invalid operation!';
      console.log(result);
      return;
  }

  console.log(result.toFixed(2));
}

calculator(5, '+', 10);
console.log('----------------');
calculator(25.5, '-', 3);
console.log('----------------');
calculator(2, '*', 3);
console.log('----------------');
calculator(1, '*', 0);
console.log('----------------');
calculator(0, '*', 0);
console.log('----------------');
calculator(2, '/', 1);
console.log('----------------');
calculator(1, '/', 2);
console.log('----------------');
calculator(1, '-', 3);
console.log('----------------');
calculator(1, '/', 0);
