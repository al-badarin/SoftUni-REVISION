function arrayManipulator(arr, commands) {
  for (let command of commands) {
    let action = command.split(' ')[0];

    switch (action) {
      case 'add':
        let index = Number(command.split(' ')[1]);
        let elementToAdd = Number(command.split(' ')[2]);
        arr.splice(index, 0, elementToAdd);
        break;

      case 'addMany':
        let parts = command.split(' ').map(Number);
        let indexToAddMany = parts[1];
        let elementsToAdd = parts.slice(2);
        arr.splice(indexToAddMany, 0, ...elementsToAdd);
        break;

      case 'contains':
        console.log(arr.indexOf(command.split(' ')[1]));
        break;

      case 'remove':
        let indexToRemove = command.split(' ')[1];
        arr.splice(indexToRemove, 1);
        break;

      case 'shift':
        let positions = Number(command.split(' ')[1]);
        for (let i = 0; i < positions; i++) {
          arr.push(arr.shift());
        }
        break;

      case 'sumPairs':
        if (arr.length % 2 !== 0) {
          arr.push(0);
        }

        let sumPairsArr = [];
        for (let i = 0; i < arr.length; i += 2) {
          let pairSum = Number(arr[i]) + Number(arr[i + 1]);
          sumPairsArr.push(pairSum);
        }
        arr = sumPairsArr;
        break;

      case 'print':
        console.log(`[ ${arr.join(', ')} ]`);
        break;
    }
  }
}

// arrayManipulator(
//   [1, 2, 4, 5, 6, 7],

//   ['add 1 8', 'contains 1', 'contains 3', 'print']
// );
