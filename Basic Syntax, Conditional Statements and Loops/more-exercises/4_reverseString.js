function reverse(input) {
  let stringifiedInput = input.toString();
  let reversed = '';

  for (let i = stringifiedInput.length - 1; i >= 0; i--) {
    reversed += stringifiedInput[i];
  }

  console.log(reversed);
}

reverse('Hello');
reverse(12345);
