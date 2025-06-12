function processCrystal(input) {
  let targetThickness = input[0]; // desired final thickness
  let currentThickness = input.slice(1); // initial chunk thicknesses
  let operations = []; // to keep track of operations

  for (let i = 0; i < currentThickness.length; i++) {
    console.log(`Processing chunk ${currentThickness[i]} microns`);

    let operationsForChunk = []; // Track operations for current chunk
    let currentCrystal = currentThickness[i];

    // If the current crystal is larger than the target, start the operations
    while (currentCrystal > targetThickness) {
      // Prioritize the largest operation first
      if (currentCrystal % 4 === 0) {
        // "Cut"
        currentCrystal /= 4;
        operationsForChunk.push('Cut');
      } else if (currentCrystal * 0.8 >= targetThickness) {
        // "Lap"
        currentCrystal *= 0.8;
        operationsForChunk.push('Lap');
      } else if (currentCrystal - 20 >= targetThickness) {
        // "Grind"
        currentCrystal -= 20;
        operationsForChunk.push('Grind');
      } else if (currentCrystal - 2 >= targetThickness) {
        // "Etch"
        currentCrystal -= 2;
        operationsForChunk.push('Etch');
      } else if (currentCrystal < targetThickness) {
        // Once we’re close, X-ray to increase
        currentCrystal += 1;
        operationsForChunk.push('X-ray');
      }

      // Always transport and wash
      operationsForChunk.push('Transporting and washing');
    }

    // After the loop, add operations for the current chunk to the result list
    operations.push(operationsForChunk);
  }

  // Print results
  operations.forEach((operation) => {
    operation.forEach((op) =>
      console.log(`${op} x${operations.filter((o) => o === op).length}`)
    );
  });

  console.log(`Finished crystal ${targetThickness} microns`);
}

// Example usage:
processCrystal([100, 120, 80, 150]);
