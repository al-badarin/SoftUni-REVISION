function bitcoinMining(shift) {
  const goldPricePerGram = 67.517;
  const bitcoinPrice = 11949.16;

  let totalMoney = 0;
  let bitcoins = 0;
  let firstBitcoinDay = null;

  for (let day = 0; day < shift.length; day++) {
    let gold = shift[day];

    if ((day + 1) % 3 === 0) {
      gold *= 0.7;
    }

    const dailyMoney = gold * goldPricePerGram;
    totalMoney += dailyMoney;

    if (totalMoney >= bitcoinPrice) {
      const buyableBitcoins = Math.floor(totalMoney / bitcoinPrice);
      bitcoins += buyableBitcoins;
      totalMoney -= buyableBitcoins * bitcoinPrice;

      if (firstBitcoinDay === null) {
        firstBitcoinDay = day + 1;
      }
    }
  }

  console.log(`Bought bitcoins: ${bitcoins}`);
  if (firstBitcoinDay !== null) {
    console.log(`Day of the first purchased bitcoin: ${firstBitcoinDay}`);
  }
  console.log(`Left money: ${totalMoney.toFixed(2)} lv.`);
}

bitcoinMining([100, 200, 300]);
