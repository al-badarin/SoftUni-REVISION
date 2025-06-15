function bombNumbers(numberSequence, bomb) {
  let bombNumber = Number(bomb[0]);
  let bombPower = Number(bomb[1]);

  while (numberSequence.includes(bombNumber)) {
    let index = numberSequence.indexOf(bombNumber);
    let start = Math.max(index - bombPower, 0);
    let deleteCount = bombPower * 2 + 1;

    numberSequence.splice(start, deleteCount);
  }

  let sum = 0;

  for (let number of numberSequence) {
    sum += number;
  }
  console.log(sum);
}

bombNumbers([1, 2, 2, 4, 2, 2, 2, 9], [4, 2]);
