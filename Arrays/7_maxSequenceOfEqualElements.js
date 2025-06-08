function solve(arr) {
  let maxCount = 1;
  let currentCount = 1;
  let bestElement = arr[0];

  for (let i = 1; i < arr.length; i++) {
    if (arr[i] === arr[i - 1]) {
      currentCount++;
    } else {
      currentCount = 1;
    }

    if (currentCount > maxCount) {
      maxCount = currentCount;
      bestElement = arr[i];
    }
  }

  console.log(Array(maxCount).fill(bestElement).join(' '));
}

solve([2, 1, 1, 2, 3, 3, 2, 2, 2, 1]);
