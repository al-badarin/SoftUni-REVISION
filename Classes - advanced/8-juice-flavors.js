function juiceFactory(input) {
  const juiceQuantities = new Map();
  const bottlesProduced = new Map();

  for (const line of input) {
    const [flavor, qtyStr] = line.split(' => ');
    const quantity = Number(qtyStr);

    if (!juiceQuantities.has(flavor)) {
      juiceQuantities.set(flavor, 0);
    }

    const updatedQty = juiceQuantities.get(flavor) + quantity;
    juiceQuantities.set(flavor, updatedQty);

    const totalBottles = Math.floor(updatedQty / 1000);
    const existingBottles = bottlesProduced.get(flavor) || 0;
    const newBottles = totalBottles - existingBottles;

    if (newBottles > 0) {
      bottlesProduced.set(flavor, existingBottles + newBottles);
    }
  }

  return Array.from(bottlesProduced.entries())
    .map(([flavor, count]) => `${flavor} => ${count}`)
    .join('\n');
}

const result = juiceFactory([
  'Kiwi => 234',
  'Pear => 2345',
  'Watermelon => 3456',
  'Kiwi => 4567',
  'Pear => 5678',
  'Watermelon => 6789',
]);

console.log(result);
