function checkSkipLogic(answers) {
  let skipToOpenText = false;

  if (answers.includes('Other')) {
    skipToOpenText = true;
  }

  return skipToOpenText;
}

console.log(checkSkipLogic(['Option 1', 'Other'])); // true
console.log(checkSkipLogic(['Option 1', 'Option 2'])); // false
