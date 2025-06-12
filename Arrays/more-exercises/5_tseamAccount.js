function tseamAccount(arr) {
  let games = arr.shift().split(' ');

  for (let command of arr) {
    if (command === 'Play!') {
      break;
    }

    let [action, game] = command.split(' ');
    switch (action) {
      case 'Install':
        if (!games.includes(game)) {
          games.push(game);
        }
        break;

      case 'Uninstall':
        if (games.includes(game)) {
          games = games.filter((g) => g !== game);
        }
        break;

      case 'Update':
        if (games.includes(game)) {
          games = games.filter((g) => g !== game);
          games.push(game);
        }
        break;

      case 'Expansion':
        let [gameName, expansion] = game.split('-');
        if (games.includes(gameName)) {
          games.push(`${gameName}:${expansion}`);
        } else {
          console.log(`${gameName} is not in your library!`);
        }
        break;
    }
  }

  console.log(games.join(' '));
}

// Example usage:
tseamAccount([
  'CS WoW Diablo',
  'Install LoL',
  'Uninstall WoW',
  'Update Diablo',
  'Expansion CS-Go',
  'Play!',
]);
