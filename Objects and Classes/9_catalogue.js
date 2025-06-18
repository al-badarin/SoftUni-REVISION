function catalogue(products) {
  const parsed = products.map((entry) => {
    const [name, price] = entry.split(' : ');
    return { name, price: Number(price) };
  });

  parsed.sort((a, b) =>
    a.name.localeCompare(b.name, 'en', { sensitivity: 'base' })
  );

  let currentInitial = '';
  for (const product of parsed) {
    const initial = product.name[0];
    if (initial !== currentInitial) {
      currentInitial = initial;
      console.log(initial);
    }
    console.log(`  ${product.name}: ${product.price}`);
  }
}

// Example usage:
catalogue([
  'Appricot : 20.4',
  'Fridge : 1500',
  'TV : 1499',
  'Deodorant : 10',
  'Boiler : 300',
  'Apple : 1.25',
  'Anti-Bug Spray : 15',
  'T-Shirt : 10',
]);
