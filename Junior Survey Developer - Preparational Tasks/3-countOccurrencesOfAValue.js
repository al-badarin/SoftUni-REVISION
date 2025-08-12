// Count Occurrences of a Value

// Problem:
// Count how many times a specific value appears in an array.

function countOccurrences(arr, value) {
  let count = 0;

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    if (curr === value) {
      count++;
    }
  }

  return count;
}

console.log(countOccurrences([1, 1, 2, 2, 3, 2, 4], 2));

// PROGRESSION
// Count Occurrences for All Values

function countAllOccurrences(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    let value = arr[i];
    if (counts[value]) {
      counts[value]++;
    } else {
      counts[value] = 1;
    }
  }

  return counts;
}

console.log(countAllOccurrences([1, 1, 2, 2, 3, 2, 4]));
