function lowerOrUpper(char) {
  let charToString = String(char);

  if (charToString.toLowerCase() === char) {
    console.log('lower-case');
  } else {
    console.log('upper-case');
  }
}

lowerOrUpper('L');
lowerOrUpper('f');
