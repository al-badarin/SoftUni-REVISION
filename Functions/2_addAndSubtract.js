function addAndSubtract(a, b, c) {
  let sumFirstAndSecond = sum(a, b);

  console.log(subtract(sumFirstAndSecond, c));

  function sum(a, b) {
    return a + b;
  }

  function subtract(sumFirstAndSecond, c) {
    return sumFirstAndSecond - c;
  }
}

addAndSubtract(23, 6, 10);
