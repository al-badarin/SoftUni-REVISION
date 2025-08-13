// Remove Duplicates from an Array Without Using Set
// Problem:
// Given an array, remove duplicate elements in place (without using Set or creating a completely new array).

function removeDuplicates(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] === arr[j]) {
        arr.splice(j, 1);
        j--;
      }
    }
  }

  return arr;
}

console.log(removeDuplicates([1, 2, 2, 3, 4, 4, 5, 2]));
// Output: [1, 2, 3, 4, 5]
