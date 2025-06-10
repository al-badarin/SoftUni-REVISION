function nextDay(year, month, day) {
  let date = new Date(year, month - 1, day);

  date.setDate(date.getDate() + 1);

  let y = date.getFullYear();
  let m = date.getMonth() + 1;
  let d = date.getDate();

  console.log(`${y}-${m}-${d}`);
}

nextDay(2016, 9, 30);
