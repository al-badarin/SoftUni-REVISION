// Problem:
// Count how many times each answer was selected across all respondents.

function choiceFrequency(responses) {
  let counts = {};

  for (let i = 0; i < responses.length; i++) {
    let respondentAnswers = responses[i];

    for (let j = 0; j < respondentAnswers.length; j++) {
      let answer = respondentAnswers[j];

      if (counts[answer]) {
        counts[answer] += 1;
      } else {
        counts[answer] = 1;
      }
    }
  }

  return counts;
}

console.log(
  choiceFrequency([
    ['Apple', 'Banana'],
    ['Banana'],
    ['Apple', 'Cherry'],
    ['Banana', 'Cherry'],
  ])
);
// Output: { Apple: 2, Banana: 3, Cherry: 2 }
