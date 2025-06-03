function solve(number) {
  for (let rows = 1; rows <= number; rows++) {
    let printLine = '';

    for (let cols = 1; cols <= rows; cols++) {
      printLine += `${rows} `;
    }
    console.log(printLine);
  }
}

solve(3);
solve(5);
solve(6);
