function replaceRepeatingChars(string) {
  let result = string[0];

  for (let i = 0; i < string.length; i++) {
    let currChar = string[i];
    let nextChar = string[i + 1];

    if (currChar !== nextChar && nextChar !== undefined) {
      result += nextChar;
    }
  }

  console.log(result);
}

replaceRepeatingChars('aaaaabbbbbcdddeeeedssaa');
