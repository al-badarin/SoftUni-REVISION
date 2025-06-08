function solve(arr) {
  let foundIndex = 'no';

  for (let i = 0; i < arr.length; i++) {
    let leftSum = 0;
    let rigtSum = 0;

    for (let l = 0; l < i; l++) {
      leftSum += arr[l];
    }

    for (let r = i + 1; r < arr.length; r++) {
      rigtSum += arr[r];
    }

    if (leftSum === rigtSum) {
      foundIndex = i;
    }
  }
  console.log(foundIndex);
}

solve([10, 5, 5, 99, 3, 4, 2, 5, 1, 1, 4]);
