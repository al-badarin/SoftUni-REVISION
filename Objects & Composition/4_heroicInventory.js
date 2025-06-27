function heroFactory(input) {
  const resultData = [];

  for (let info of input) {
    if (!info.trim()) continue; // Skip empty lines

    let [name, level, items] = info.split(' / ');
    if (!name || isNaN(level)) continue; // Skip invalid entries

    level = Number(level);
    items = items ? items.split(', ') : [];

    resultData.push({ name, level, items });
  }

  console.log(JSON.stringify(resultData));
}

heroFactory([
  'Isacc / 25 / Apple, GravityGun',
  'Derek / 12 / BarrelVest, DestructionSword',
  'Hes / 1 / Desolator, Sentinel, Antara',
]);
