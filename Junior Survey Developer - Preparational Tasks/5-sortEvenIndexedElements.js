// Problem:
// Sort only even-indexed elements in ascending order, leaving odd-indexed ones untouched.

function sortEvenIndexedElements(arr) {
  for (let i = 0; i < arr.length; i += 2) {
    for (let j = i + 2; j < arr.length; j += 2) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
}

console.log(sortEvenIndexedElements([4, 9, 1, 5, 7, 6]));
