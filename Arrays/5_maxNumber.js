function solve(arr) {
  let resultArr = [];

  for (let i = 0; i < arr.length; i++) {
    let isLargest = true;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] <= arr[j]) {
        isLargest = false;
        break;
      }
    }

    if (isLargest) {
      resultArr.push(arr[i]);
    }
  }

  console.log(resultArr.join(' '));

  // *manual print
  //   let result = '';
  //   for (let i = 0; i < resultArr.length; i++) {
  //     result += resultArr[i];
  //     if (i < resultArr.length - 1) {
  //       result += ' ';
  //     }
  //   }

  //   console.log(result);
}

solve([1, 4, 3, 2]);
solve([14, 24, 3, 19, 15, 17]);
solve([41, 41, 34, 20]);
