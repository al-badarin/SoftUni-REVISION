function foodTracker(input) {
  const data = input[0];

  const pattern =
    /([#]|[|])(?<item>[A-Za-z\s]+)\1(?<date>[0-9]{2}\/[0-9]{2}\/[0-9]{2})\1(?<calories>[0-9]{1,5})\1/g;

  const matches = [...data.matchAll(pattern)];

  let totalCalories = 0;
  const items = [];

  for (const match of matches) {
    const { item, date, calories } = match.groups;
    totalCalories += Number(calories);
    items.push({ item, date, calories });
  }

  const days = Math.floor(totalCalories / 2000);
  console.log(`You have food to last you for: ${days} days!`);

  for (const food of items) {
    console.log(
      `Item: ${food.item}, Best before: ${food.date}, Nutrition: ${food.calories}`
    );
  }
}

foodTracker([
  '#Bread#19/03/21#4000#|Invalid|03/03.20||Apples|08/10/20|200||Carrots|06/08/20|500||Not right|6.8.20|5|',
]);
