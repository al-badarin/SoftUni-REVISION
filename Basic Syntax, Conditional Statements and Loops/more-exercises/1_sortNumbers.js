// *SOLUTION 1 - using .sort()
function sortNumbers(input) {
  input.sort((a, b) => b - a);

  for (let num of input) {
    console.log(num);
  }
}

sortNumbers([2, 1, 3]);

// *SOLUTION 2 - without using .sort()
function sortDescendingNoSort(input) {
  let inputL = input.length;

  for (let i = 0; i < inputL - 1; i++) {
    for (let j = 0; j < inputL - 1 - i; j++) {
      if (input[j] < input[j + 1]) {
        let temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }

  for (let num of input) {
    console.log(num);
  }
}

sortDescendingNoSort([3, 1, 4, 1, 5, 9]);
