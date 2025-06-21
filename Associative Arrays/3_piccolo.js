function parkingCars(input) {
  const parking = new Set();

  for (const line of input) {
    const [direction, carNumber] = line.split(', ');

    if (direction === 'IN') {
      parking.add(carNumber);
    } else if (direction === 'OUT') {
      parking.delete(carNumber);
    }
  }

  const sortedCars = Array.from(parking).sort();

  if (sortedCars.length <= 0) {
    console.log('Parking Lot is Empty');
  }
  for (const car of sortedCars) {
    console.log(car);
  }
}

parkingCars([
  'IN, CA2844AA',
  'IN, CA1234TA',
  'OUT, CA2844AA',
  'IN, CA9999TT',
  'IN, CA2866HI',
  'OUT, CA1234TA',
  'IN, CA2844AA',
  'OUT, CA2866HI',
  'IN, CA9876HH',
  'IN, CA2822UU',
]);

parkingCars(['IN, CA2844AA', 'IN, CA1234TA', 'OUT, CA2844AA', 'OUT, CA1234TA']);
