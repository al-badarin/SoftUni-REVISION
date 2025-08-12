//Find the Maximum Number in an Array

// Problem:
// Given an array of numbers, find and return the largest number without using Math.max().

function findMax(arr) {
  let max = arr[0];

  for (let i = 1; i <= arr.length; i++) {
    let temp = arr[i];
    if (temp > max) {
      max = temp;
    }
  }

  return max;
}

console.log(findMax([1, 2, 3, 4, 5]));
