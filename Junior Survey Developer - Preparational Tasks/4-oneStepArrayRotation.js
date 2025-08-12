// Problem:
// Rotate an array one step to the right in place. Example: [1, 2, 3, 4] → [4, 1, 2, 3].

function oneStepArrRotation(arr) {
  let lastElement = arr[arr.length - 1];

  for (let i = arr.length - 1; i > 0; i--) {
    arr[i] = arr[i - 1];
  }

  arr[0] = lastElement;

  return arr;
}

console.log(oneStepArrRotation([1, 2, 3, 4, 5]));
