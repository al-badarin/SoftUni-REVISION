function stringSubstring(word, text) {
  let splitedText = text.split(' ').map((w) => w.toLowerCase());

  if (splitedText.includes(word)) {
    console.log(word);
  } else {
    console.log(`${word} not found!`);
  }
}

stringSubstring('javascript', 'JavaScript is the best programming language');
stringSubstring('python', 'JavaScript is the best programming language');
