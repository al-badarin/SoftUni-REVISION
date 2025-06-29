function shoppingList(input) {
  let groceriesList = input.shift().split('!');

  while (input[0] !== 'Go Shopping!') {
    let command = input.shift().split(' ');
    let action = command[0];
    let item = command[1];

    if (action === 'Urgent') {
      if (!groceriesList.includes(item)) {
        groceriesList.unshift(item);
      }
    } else if (action === 'Unnecessary') {
      if (groceriesList.includes(item)) {
        groceriesList.splice(groceriesList.indexOf(item), 1);
      }
    } else if (action === 'Correct') {
      let newItem = command[2];
      if (groceriesList.includes(item)) {
        groceriesList.splice(groceriesList.indexOf(item), 1, newItem);
      }
    } else if (action === 'Rearrange') {
      if (groceriesList.includes(item)) {
        let itemToMove = groceriesList.splice(groceriesList.indexOf(item), 1);
        groceriesList.push(itemToMove);
      }
    }
  }

  //   return groceriesList.join(', ');
  console.log(groceriesList.join(', '));
}

shoppingList([
  'Tomatoes!Potatoes!Bread',

  'Unnecessary Milk',

  'Urgent Tomatoes',

  'Go Shopping!',
]);
