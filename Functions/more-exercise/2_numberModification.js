function numberMofification(num) {
  let numString = num.toString();
  let sum = 0;

  for (let digit of numString) {
    sum += Number(digit);
  }

  let average = sum / numString.length;

  while (average <= 5) {
    numString += '9';
    sum += 9;
    average = sum / numString.length;
  }

  console.log(numString);
}

// Example usage:
numberMofification(101); // Output: 1019
numberMofification(5835); // Output: 5835
