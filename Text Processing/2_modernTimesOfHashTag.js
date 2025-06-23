function extractHashtags(input) {
  const words = input.split(' ');

  for (let word of words) {
    if (word.startsWith('#') && word.length > 1) {
      const tag = word.slice(1);

      let isValid = true;
      for (const char of tag) {
        const code = char.charCodeAt(0);
        if (!(code >= 65 && code <= 90) && !(code >= 97 && code <= 122)) {
          isValid = false;
          break;
        }
      }

      if (isValid) {
        console.log(tag);
      }
    }
  }
}

findSpecialWords(
  'Nowadays everyone uses # to tag a #special word in #socialMedia'
);
