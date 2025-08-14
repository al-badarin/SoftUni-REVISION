// Problem:
// Mark if someone answers "Yes" to "Owns a car" but "No" to "Drives".

function detectContradiction(carOwner, drives) {
  return carOwner === 'Yes' && drives === 'No';
}

console.log(detectContradiction('Yes', 'No')); // true
console.log(detectContradiction('Yes', 'Yes')); // false
