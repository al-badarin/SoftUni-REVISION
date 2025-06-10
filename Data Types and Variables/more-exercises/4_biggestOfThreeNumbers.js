function findBiggestNumber(a, b, c) {
  let biggestNumber = null;

  if (a >= b && a >= c) {
    biggestNumber = a;
  } else if (b >= a && b >= c) {
    biggestNumber = b;
  } else {
    biggestNumber = c;
  }

  return biggestNumber;
}
