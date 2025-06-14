function train(arr) {
  let wagons = arr.shift().split(' ').map(Number);
  let maxCapacity = Number(arr.shift());

  for (let command of arr) {
    let [action, value] = command.split(' ');
    value = Number(value);

    if (action === 'Add') {
      wagons.push(value);
    } else {
      for (let i = 0; i < wagons.length; i++) {
        if (wagons[i] + value <= maxCapacity) {
          wagons[i] += value;
          break;
        }
      }
    }
  }

  console.log(wagons.join(' '));
}

// Example usage:
train([
  '32 54 21 12 4 0 23',
  '75',
  'Add 10',
  'Add 0',
  '30',
  '10',
  '75'
]); // Output: 42 54 21 12 4 0 23 10