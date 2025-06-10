function factorialDivision(num1, num2) {
  let factorialNum1 = factorial(num1);
  let factorialNum2 = factorial(num2);

  let result = 0;

  return (result = (factorialNum1 / factorialNum2).toFixed(2));
}

function factorial(num) {
  let sum = 1;

  for (let i = 1; i <= num; i++) {
    sum *= Number(i);
  }

  return sum;
}

factorialDivision(5, 2);
factorialDivision(6, 2);
