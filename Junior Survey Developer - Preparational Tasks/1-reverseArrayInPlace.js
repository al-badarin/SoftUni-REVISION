// Level 1 – Easy
// Reverse an Array in Place
// Given an array of numbers, reverse the order without using an auxiliary array.

// solution 1
function reverseArrayInPlace(arr) {
  let left = 0;
  let right = arr.length - 1;
  while (left < right) {
    [arr[left], arr[right]] = [arr[right], arr[left]];
    left++;
    right--;
  }
  return arr;
}

console.log(reverseArrayInPlace([1, 2, 3, 4, 5]));

// solution 2
let arr = [1, 2, 3, 4, 5];
let l = arr.length;

for (let i = 0; i < Math.floor(l / 2); i++) {
  let temp = arr[i];
  arr[i] = arr[l - 1 - i];
  arr[l - 1 - i] = temp;
}

console.log(arr);
