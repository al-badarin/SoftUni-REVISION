// SOLUTION 1
function sorting(input) {
  let sorted = input.sort((a, b) => a - b);
  let result = [];

  let start = 0;
  let end = sorted.length - 1;

  while (start <= end) {
    if (start === end) {
      result.push(sorted[start]);
    } else {
      result.push(sorted[start]);
      result.push(sorted[end]);
    }

    start++;
    end--;
  }

  console.log(result.join(' '));
}

// SOLUTION 2
function sorting(input) {
  input = input.sort((a, b) => a - b);
  let result = [];

  while (input.length > 0) {
    let smallestNum = input.shift();
    result.push(smallestNum);

    let biggestNum = input.pop();
    if (biggestNum !== undefined) {
      result.push(biggestNum);
    }
  }

  console.log(result.join(' '));
}
