// Sort Array by Frequency (Highest First)
// Problem:
// Sort an array so that numbers that appear most frequently come first.
// If two numbers have the same frequency, sort them in ascending order.

function sortByFrequency(arr) {
  let counts = {};

  for (let i = 0; i < arr.length; i++) {
    let curr = arr[i];

    if (counts[curr]) {
      counts[curr] += curr;
    } else {
      counts[curr] = 1;
    }
  }

  arr.sort((a, b) => {
    if (counts[a] === counts[b]) {
      return a - b;
    }
    return counts[b] - counts[a];
  });

  return arr;
}

console.log(sortByFrequency([4, 4, 1, 2, 2, 3, 3, 3]));
// Output: [3, 3, 3, 4, 4, 2, 2, 1]
