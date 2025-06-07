function solve(arr) {
  // make the new array
  let modifiedArray = [];

  // sum of the numbers of the ORIGINAL array
  let originalSum = 0;
  for (let el of arr) {
    originalSum += el;
  }

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      // - if the number is even -> + index
      arr[i] += i;
    } else {
      // - if the number is odd -> - index
      arr[i] -= i;
    }

    modifiedArray.push(arr[i]);
  }

  // sum of the numbers of the MODIFIED array
  let modifiedSum = 0;
  for (let el of modifiedArray) {
    modifiedSum += el;
  }

  console.log(modifiedArray);
  console.log(originalSum);
  console.log(modifiedSum);
}

solve([5, 15, 23, 56, 35]);
