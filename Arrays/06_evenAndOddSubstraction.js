function solve(numbers) {
  let evenSum = 0;
  let oddSum = 0;

  for (let num of numbers) {
    let number = Number(num);

    if (number % 2 == 0) {
      evenSum += number;
    } else {
      oddSum += number;
    }
  }

  console.log(evenSum - oddSum);
}

solve([1, 2, 3, 4, 5, 6]);
