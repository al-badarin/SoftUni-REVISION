function carWash(input) {
  let cleanliness = 0;

  for (let command of input) {
    switch (command) {
      case 'soap':
        cleanliness += 10;
        break;
      case 'water':
        cleanliness *= 1.2;
        break;
      case 'vacuum cleaner':
        cleanliness *= 1.25;
        break;
      case 'mud':
        cleanliness *= 0.9;
        break;
    }
  }

  if (cleanliness > 100) {
    cleanliness = 100;
  }

  if (cleanliness < 0) {
    cleanliness = 0;
  }

  console.log(`The car is ${cleanliness.toFixed(2)}% clean.`);
}

// Example usage:
carWash(['soap', 'soap', 'vacuum cleaner', 'mud', 'soap', 'water']);
