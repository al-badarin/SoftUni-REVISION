function cutAndReverse(text) {
  const middle = text.length / 2;

  const firstPart = text.substring(0, middle).split('').reverse().join('');
  console.log(firstPart);

  const secondPart = text.substring(middle).split('').reverse().join('');
  console.log(secondPart);
}

cutAndReverse('tluciffiDsIsihTgnizamAoSsIsihT');
