// Rotate Array k Steps Without Extra Array
// Problem:
// Rotate the array k steps to the right in place without creating another array.

// Example:
// [1, 2, 3, 4, 5, 6, 7], k=3 → [5, 6, 7, 1, 2, 3, 4]

function rotateArray(arr, k) {
  k = k % arr.length;

  function reverse(start, end) {
    while (start < end) {
      [arr[start], arr[end]] = [arr[end], arr[start]];
      start++;
      end--;
    }
  }

  reverse(0, arr.length - 1);
  reverse(0, k - 1);
  reverse(k, arr.length - 1);

  return arr;
}

console.log(rotateArray([1, 2, 3, 4, 5, 6, 7], 3));
// Output: [5, 6, 7, 1, 2, 3, 4]
