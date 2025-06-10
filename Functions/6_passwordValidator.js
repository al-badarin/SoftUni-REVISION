function passwordValidator(password) {
  let isLengthValid = checkLength(password);
  let isOnlyLettersAndDigits = checkLettersAndDigits(password);
  let isMinimumTwoDigits = checkMinimumTwoDigits(password);

  if (isLengthValid && isOnlyLettersAndDigits && isMinimumTwoDigits) {
    console.log(`Password is valid`);
  } else {
    if (!isLengthValid) {
      console.log(`Password must be between 6 and 10 characters`);
    }
    if (!isOnlyLettersAndDigits) {
      console.log(`Password must consist only of letters and digits`);
    }
    if (!isMinimumTwoDigits) {
      console.log(`Password must have at least 2 digits`);
    }
  }
}

function checkLength(password) {
  return password.length >= 6 && password.length <= 10;
}

function checkLettersAndDigits(password) {
  for (let char of password) {
    let code = char.charCodeAt(0);
    if (
      !(code >= 48 && code <= 57) && // digits
      !(code >= 65 && code <= 90) && // uppercase
      !(code >= 97 && code <= 122) // lowercase
    ) {
      return false;
    }
  }
  return true;
}

function checkMinimumTwoDigits(password) {
  let count = 0;
  for (let char of password) {
    let code = char.charCodeAt(0);
    if (code >= 48 && code <= 57) {
      count++;
    }
  }
  return count >= 2;
}

passwordValidator('logIn');
passwordValidator('MyPass123');
