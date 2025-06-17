function storeProvision(currentStock, orderedProducts) {
  let productsInStore = {};
  let productsForDelivery = {};

  for (let i = 0; i < currentStock.length; i += 2) {
    let productName = currentStock[i];
    let quantity = Number(currentStock[i + 1]);
    productsInStore[productName] = quantity;
  }

  for (let i = 0; i < orderedProducts.length; i += 2) {
    let productName = orderedProducts[i];
    let quantity = Number(currentStock[i + 1]);
    productsInStore[productName] = quantity;
  }

  for (let product in productsForDelivery) {
    if (productsInStore[product] !== undefined) {
      productsInStore[product] += productsForDelivery[product];
    } else {
      productsInStore[product] = productsForDelivery[product];
    }
  }

  for (let product in productsInStore) {
    console.log(`${product} -> ${productsInStore[product]}`);
  }
}

storeProvision(
  ['Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'],

  ['Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30']
);
