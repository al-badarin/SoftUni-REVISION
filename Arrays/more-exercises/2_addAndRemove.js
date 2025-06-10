function addAndRemove(arr) {
  let result = [];
  let num = 1;

  for (let command of arr) {
    if (command === 'add') {
      result.push(num);
    } else if (command === 'remove') {
      result.pop();
    }
    num++;
  }
  console.log(result.length > 0 ? result.join(' ') : 'Empty!');
}
