function wordTracker(input) {
  const searchedWords = input.shift().split(' ');

  const textWords = input.join(' ').split(' ');

  const countMap = {};
  for (const word of searchedWords) {
    const count = textWords.filter((w) => w === word).length;
    countMap[word] = count;
  }

  const sortedWords = Object.entries(countMap).sort((a, b) => b[1] - a[1]);

  for (const [word, count] of sortedWords) {
    console.log(`${word} - ${count}`);
  }
}

wordTracker([
  'this sentence',

  'In',
  'this',
  'sentence',
  'you',
  'have',

  'to',
  'count',
  'the',
  'occurrences',
  'of',

  'the',
  'words',
  'this',
  'and',
  'sentence',

  'because',
  'this',
  'is',
  'your',
  'task',
]);
