// Problem:
// Move all zeros in an array to the end while maintaining order of non-zero elements, without extra space.

// Example: [0, 1, 0, 3, 12] → [1, 3, 12, 0, 0]

function movingZeros(arr) {
  let arrLength = arr.length;
  let insertPos = 0;

  for (let i = 0; i < arrLength; i++) {
    if (arr[i] !== 0) {
      let temp = arr[i];
      arr[i] = arr[insertPos];
      arr[insertPos] = temp;
      insertPos++;
    }
  }

  return arr;
}

console.log(movingZeros([0, 1, 0, 3, 12]));
