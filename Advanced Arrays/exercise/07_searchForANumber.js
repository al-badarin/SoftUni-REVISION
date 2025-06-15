function searchNumber(arr, input) {
  let [numbersToTakeFromArr, deletedNumbersFromArr, searchedNumber] = input;

  let newArr = arr.slice(0, numbersToTakeFromArr);
  newArr.splice(0, deletedNumbersFromArr);

  let counter = 0;

  for (num of newArr) {
    if (num === searchedNumber) {
      counter++;
    }
  }

  console.log(`Number ${searchedNumber} occurs ${counter} times.`);
}

searchNumber(
  [5, 2, 3, 4, 1, 6],

  [5, 2, 3]
);
