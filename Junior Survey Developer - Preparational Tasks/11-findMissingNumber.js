// Find Missing Number Without Sorting
// Problem:
// Given an array containing numbers from 1 to n (inclusive) with one number missing, find the missing number without sorting.

// Example: [1, 2, 4, 5, 6] → 3

function findMissingNumber(arr) {
  let n = arr.length + 1;
  let expectedSum = (n * (n + 1)) / 2;
  let actualSum = arr.reduce((sum, num) => sum + num, 0);
  return expectedSum - actualSum;
}

console.log(findMissingNumber([1, 2, 4, 5, 6])); // Output: 3
