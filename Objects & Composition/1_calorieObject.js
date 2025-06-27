function calorieBook(input) {
  const calorieObj = {};

  for (let i = 0; i < input.length; i += 2) {
    let product = input[i];
    let calories = Number(input[i + 1]);

    calorieObj[product] = calories;
  }

  console.log(calorieObj);

  //   for (let product in calorieObj) {
  //     console.log(`${product} -> ${calorieObj[product]}`);
  //   }
}

calorieBook(['Potato', '93', 'Skyr', '63', 'Cucumber', '18', 'Milk', '42']);
