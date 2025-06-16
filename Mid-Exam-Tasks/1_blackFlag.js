function blackFlag(input) {
  let days = Number(input[0]);
  let plunderPerDay = Number(input[1]);
  let expectedPlunder = Number(input[2]);

  let totalPlunder = 0;

  for (let i = 1; i <= days; i++) {
    totalPlunder += plunderPerDay;

    if (i % 3 === 0) {
      totalPlunder += plunderPerDay * 0.5;
    }

    if (i % 5 === 0) {
      totalPlunder = totalPlunder * 0.7;
    }
  }

  if (totalPlunder >= expectedPlunder) {
    console.log(`Ahoy! ${totalPlunder.toFixed(2)} plunder gained.`);
  } else {
    let percentageLeft = (totalPlunder / expectedPlunder) * 100;
    console.log(`Collected only ${percentageLeft.toFixed(2)}% of the plunder.`);
  }
}
