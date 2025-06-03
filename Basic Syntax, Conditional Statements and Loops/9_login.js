function login(inputs) {
  const username = inputs[0];
  const correctPassword = username.split('').reverse().join('');

  let attempts = 0;

  for (let i = 1; i < inputs.length; i++) {
    const attempt = inputs[i];
    attempts++;

    if (attempt === correctPassword) {
      console.log(`User ${username} logged in.`);
      return;
    }

    if (attempts === 4) {
      console.log(`User ${username} blocked!`);
      return;
    } else {
      console.log('Incorrect password. Try again.');
    }
  }
}

login(['Acer', 'login', 'go', 'let me in', 'recA']);
login(['momo', 'omom']);
login(['sunny', 'rainy', 'cloudy', 'sunny', 'not sunny']);
