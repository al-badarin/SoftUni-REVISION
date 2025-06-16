function movingTargets(input) {
  let sequenceOfTargets = input.shift().split(' ').map(Number);

  while (input[0] !== 'End') {
    let command = input.shift().split(' ');
    let action = command[0];
    let index = Number(command[1]);

    if (action === 'Shoot') {
      let power = Number(command[2]);

      if (index >= 0 && index < sequenceOfTargets.length) {
        sequenceOfTargets[index] -= power;

        if (sequenceOfTargets[index] <= 0) {
          sequenceOfTargets.splice(index, 1);
        }
      }
    } else if (action === 'Add') {
      let value = Number(command[2]);
      if (index >= 0 && index < sequenceOfTargets.length) {
        sequenceOfTargets.splice(index, 0, value);
      } else {
        console.log('Invalid placement!');
      }
    } else if (action === 'Strike') {
      let radius = Number(command[2]);
      let startIndex = index - radius;
      let endIndex = index + radius;

      if (startIndex >= 0 && endIndex < sequenceOfTargets.length) {
        let strikeRange = endIndex - startIndex + 1;
        sequenceOfTargets.splice(startIndex, strikeRange);
      } else {
        console.log('Strike missed!');
      }
    }
  }
  console.log(sequenceOfTargets.join('|'));
}

movingTargets([
  '52 74 23 44 96 110',

  'Shoot 5 10',

  'Shoot 1 80',

  'Strike 2 1',

  'Add 22 3',

  'End',
]);
