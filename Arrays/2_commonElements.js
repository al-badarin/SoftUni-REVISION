function solve(arr1, arr2) {
  let result = [];

  for (let el1 of arr1) {
    for (let el2 of arr2) {
      if (el1 === el2) {
        result.push(el1);
      }
    }
  }

  console.log(result.join('\n'));
}

solve(
  ['Hey', 'hello', 2, 4, 'Peter', 'e'],

  ['Petar', 10, 'hey', 4, 'hello', '2']
);
