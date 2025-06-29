function theImitationGame(input) {
  let encMessage = input.shift();
  let line = input.shift();

  while (line !== 'Decode') {
    let [command, ...args] = line.split('|');

    if (command === 'Move') {
      let stepsToMove = Number(args[0]);
      let moved = encMessage.substring(0, stepsToMove);
      encMessage = encMessage.substring(stepsToMove) + moved;
    } else if (command === 'Insert') {
      let index = Number(args[0]);
      let value = args[1];

      encMessage = encMessage.slice(0, index) + value + encMessage.slice(index);
    } else if (command === 'ChangeAll') {
      let substring = args[0];
      let replacement = args[1];

      encMessage = encMessage.split(substring).join(replacement);
      //   encMessage = encMessage.replaceAll(substring, replacement);
    }

    line = input.shift();
  }

  console.log(`The decrypted message is: ${encMessage}`);
}

theImitationGame(['zzHe', 'ChangeAll|z|l', 'Insert|2|o', 'Move|3', 'Decode']);
