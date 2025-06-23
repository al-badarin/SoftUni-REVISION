function revealWords(words, template) {
  let wordsToReveal = words.split(', ');
  let sentence = template.split(' ');

  for (let word of wordsToReveal) {
    for (let el of sentence) {
      if (el.includes('*') && el.length == word.length) {
        template = template.replace(el, word);
      }
    }
  }

  console.log(template);
}

revealWords(
  'great',
  'softuni is ***** place for learning new programming languages'
);

revealWords(
  'great, learning',
  'softuni is ***** place for ******** new programming languages'
);
