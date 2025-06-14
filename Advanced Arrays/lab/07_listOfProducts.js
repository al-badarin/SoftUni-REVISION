function listOfProdcts(input) {
  let sortedProducts = input.sort((a, b) => a.localeCompare(b));

  for (let i = 0; i < sortedProducts.length; i++) {
    console.log(`${i + 1}.${sortedProducts[i]}`);
  }
}
