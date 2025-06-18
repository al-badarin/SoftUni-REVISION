function inventory(input) {
  let heroes = [];

  input.forEach((line) => {
    let [heroName, heroLevel, items] = line.split(' / ');
    heroLevel = Number(heroLevel);
    items = items ? items.split(',') : [];

    heroes.push({
      name: heroName,
      level: heroLevel,
      items: items,
    });
  });

  heroes.sort((a, b) => a.level - b.level);

  for (let hero of heroes) {
    console.log(`Hero: ${hero.name}`);
    console.log(`level => ${hero.level}`);
    console.log(`items => ${hero.items}`);
  }
}

inventory([
  'Isacc / 25 / Apple, GravityGun',

  'Derek / 12 / BarrelVest, DestructionSword',

  'Hes / 1 / Desolator, Sentinel, Antara',
]);
