function loadingBar(number) {
  const percentageSymbol = '%';
  const dotSymbol = '.';

  if (number === 100) {
    console.log('100% Complete!');
  } else if (number < 0 || number > 100) {
    console.log('Error! Number must be between 0 and 100!');
  } else {
    console.log(
      `${number}% [${percentageSymbol.repeat(number / 10)}${dotSymbol.repeat(
        10 - number / 10
      )}]`
    );
    console.log('Still loading...');
  }
}

loadingBar(30);
loadingBar(50);
loadingBar(100);
