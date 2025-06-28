function lowestPrice(input) {
  const products = {};

  for (let info of input) {
    let [town, product, price] = info.split(' | ');
    price = Number(price);

    if (!products.hasOwnProperty(product))  {
      products[product] = { town, price };
    } else if (price < products[product].price) {
      products[product] = { town, price };
    }
  }

  for (const product in products) {
    const data = products[product];
    console.log(`${product} -> ${data.price} (${data.town})`);
  }
}

lowestPrice([
  'Sample Town | Sample Product | 1000',
  'Sample Town | Orange | 2',
  'Sample Town | Peach | 1',
  'Sofia | Orange | 3',
  'Sofia | Peach | 2',
  'New York | Sample Product | 1000.1',
  'New York | Burger | 10',
]);
