function perfectNumber(number) {
  let sum = 0;

  for (let currentNumber = 1; currentNumber < number; currentNumber++) {
    if (number % currentNumber === 0) {
      sum += currentNumber;
    }
  }

  let result =
    sum === number ? 'We have a perfect number!' : "It's not so perfect.";

  console.log(result);
}

perfectNumber(6);
perfectNumber(28);
