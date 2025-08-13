// Problem:
// Sort the first half of an array ascending and the second half descending in place (similar to screenshot).
// If odd length, middle element belongs to first half.

// Example: [2, 7, 6, 9, 8, 3, 5, 1, 2] → [2, 6, 7, 8, 9, 5, 3, 2, 1]

function customSort(arr) {
  let arrLength = arr.length;
  let arrMiddle = Math.floor((arrLength + 1) / 2);

  // Sort first half ascending
  for (let i = 0; i < arrMiddle; i++) {
    for (let j = i + 1; j < arrMiddle; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  // Sort second half descending
  for (let i = arrMiddle; i < arrLength; i++) {
    for (let j = i + 1; j < arrLength; j++) {
      if (arr[i] < arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }

  return arr;
}

console.log(customSort([2, 7, 6, 9, 8, 3, 5, 1, 2]));
