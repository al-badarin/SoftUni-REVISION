function cardGame(input) {
  const players = new Map();

  const typeMap = { S: 4, H: 3, D: 2, C: 1 };

  function getPowerValue(power) {
    if (!isNaN(power)) return Number(power);
    const faceCards = { J: 11, Q: 12, K: 13, A: 14 };
    return faceCards[power];
  }

  for (const line of input) {
    const [name, cardsString] = line.split(': ');
    const cards = cardsString.split(', ');

    if (!players.has(name)) {
      players.set(name, new Set());
    }

    for (const card of cards) {
      players.get(name).add(card);
    }
  }

  for (const [name, cards] of players.entries()) {
    let total = 0;

    for (const card of cards) {
      const type = card.slice(-1);
      const power = card.slice(0, -1);
      const value = getPowerValue(power) * typeMap[type];
      total += value;
    }

    console.log(`${name}: ${total}`);
  }
}

cardGame([
  'Peter: 2C, 4H, 9H, AS, QS',
  'Tomas: 3H, 10S, JC, KD, 5S, 10S',
  'Andrea: QH, QC, QS, QD',
  'Tomas: 6H, 7S, KC, KD, 5S, 10C',
  'Andrea: QH, QC, JS, JD, JC',
  'Peter: JD, JD, JD, JD, JD, JD',
]);
