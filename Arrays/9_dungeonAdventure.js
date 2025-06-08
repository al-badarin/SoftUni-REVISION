function dungeonAdventure(input) {
  let health = 100;
  let coins = 0;
  let rooms = input[0].split('|');

  for (let i = 0; i < rooms.length; i++) {
    let [command, valueStr] = rooms[i].split(' ');
    let value = Number(valueStr);

    if (command === 'potion') {
      let healed = Math.min(100 - health, value);
      health += healed;
      console.log(`You healed for ${healed} hp.`);
      console.log(`Current health: ${health} hp.`);
    } else if (command === 'chest') {
      coins += value;
      console.log(`You found ${value} coins.`);
    } else {
      health -= value;
      if (health > 0) {
        console.log(`You slayed ${command}.`);
      } else {
        console.log(`You died! Killed by ${command}.`);
        console.log(`Best room: ${i + 1}`);
        return;
      }
    }
  }

  console.log("You've made it!");
  console.log(`Coins: ${coins}`);
  console.log(`Health: ${health}`);
}

dungeonAdventure([
  'rat 10|bat 20|potion 10|rat 10|chest 100|boss 70|chest 1000',
]);
