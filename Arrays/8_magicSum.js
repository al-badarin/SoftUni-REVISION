function solve(arr, num) {
  let result = [];
  let validPair = '';

  for (let i = 0; i < arr.length; i++) {
    for (let k = i + 1; k < arr.length; k++) {
      if (arr[i] + arr[k] === num) {
        validPair = `${arr[i]} ${arr[k]}`;
        result.push(validPair);
      }
    }
  }

  console.log(result.join(`\n`));
}

solve([14, 20, 60, 13, 7, 19, 8], 27);
