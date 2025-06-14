function arrayManipulations(input) {
  let arrOfNumbers = input
    .shift()
    .split(' ')
    .map((x) => Number(x));

  for (let line of input) {
    let [command, arg1, arg2] = line.split(' ');
    arg1 = Number(arg1);
    arg2 = Number(arg2);

    switch (command) {
      case 'Add':
        arrOfNumbers.push(arg1);
        break;
      case 'Remove':
        arrOfNumbers = arrOfNumbers.filter((x) => x !== arg1);
        break;
      case 'RemoveAt':
        arrOfNumbers.splice(arg1, 1);
        break;
      case 'Insert':
        let number = arg1;
        let index = arg2;
        if (index >= 0 && index < arrOfNumbers.length) {
          arrOfNumbers.splice(index, 0, number);
        }
    }
  }

  console.log(arrOfNumbers.join(' '));
}

// Example usage:
arrayManipulations([
  '4 19 2 53 6 43',
  'Add 3',
  'Remove 2',
  'RemoveAt 1',
  'Insert 8 3',
]); // Output: 4 53 6 8 3
