// Problem:
// Given an array of responses, count how many participants answered "Yes".

function countYes(responses) {
  let count = 0;

  for (i = 0; i < responses.length; i++) {
    let curr = responses[i];
    if (curr.toLowerCase() === 'yes') {
      count++;
    }
  }

  return count;
}

console.log(countYes(['Yes', 'No', 'Yes', 'Maybe', 'yes']));
// Output: 3
