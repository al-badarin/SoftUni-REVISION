// SOLUTION 1

function solve(arr) {
  let result = [];

  for (let i = 0; i < arr.length; i++) {
    if (i === 0 || arr[i] >= arr[i - 1]) {
      result.push(arr[i]);
    }
  }
  return result.join(' ');
}

// SOLUTION 2
function nonDecreasingSubset(arr) {
  let result = [];
  let currentMax = arr[0];

  result.push(currentMax);

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] >= currentMax) {
      result.push(arr[i]);
      currentMax = arr[i];
    }
  }

  console.log(result.join(' '));
}

nonDecreasingSubset([1, 3, 8, 4, 10, 12, 3, 2, 24]);
// Output: 1 3 8 10 12 24

nonDecreasingSubset([1, 2, 3, 4]);
// Output: 1 2 3 4

nonDecreasingSubset([20, 3, 2, 15, 6, 1]);
// Output: 20