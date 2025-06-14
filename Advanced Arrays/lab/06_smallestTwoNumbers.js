// solution 1

function smallestTwoNumbers(arr) {
  arr.sort((a, b) => a - b);
  let smallestTwoNumbers = arr.slice(0, 2);
  return smallestTwoNumbers.join(' ');
}

// solution 2
function smallestTwoNumbers2(arr) {
  let min1 = Number.MAX_SAFE_INTEGER;
  let min2 = Number.MAX_SAFE_INTEGER;

  for (let num of arr) {
    if (num < min1) {
      min2 = min1;
      min1 = num;
    } else if (num < min2) {
      min2 = num;
    }
  }

  console.log(`${min1} ${min2}`);
}

// Example usage:
smallestTwoNumbers2([30, 15, 50, 5]); // Output: 5 15
smallestTwoNumbers2([3, 0, 10, 4, 7, 3]); // Output: 0 3
