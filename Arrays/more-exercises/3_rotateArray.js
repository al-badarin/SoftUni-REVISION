function rotateArray(arr) {
  let rotationSteps = Number(arr.pop());

  for (let i = 0; i < rotationSteps % arr.length; i++) {
    let lastElement = arr.pop();
    arr.unshift(lastElement);
  }
  
  return arr.join(' ');
}

rotateArray(['Banana', 'Orange', 'Coconut', 'Apple', '15']);
