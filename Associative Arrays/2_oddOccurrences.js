function oddOccurrences(inputString) {
  let words = inputString.split(' ').map((w) => w.toLowerCase());

  const wordsObj = {};

  for (const word of words) {
    wordsObj[word] = (wordsObj[word] || 0) + 1;
  }

  const result = [];
  const added = new Set();

  for (const word of words) {
    if (wordsObj[word] % 2 === 1 && !added.has(word)) {
      result.push(word);
      added.add(word);
    }
  }

  console.log(result.join(' '));
}

oddOccurrences('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
