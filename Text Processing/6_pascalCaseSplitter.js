function pascalCaseSplitter(input) {
  let result = input[0];
  let lower = input.toLowerCase();

  for (let i = 1; i < input.length; i++) {
    if (input[i] !== lower[i]) {
      result += ', ';
    }
    result += input[i];
  }
  console.log(result);
}

pascalCaseSplitter('SplitMeIfYouCanHaHaYouCantOrYouCan');
