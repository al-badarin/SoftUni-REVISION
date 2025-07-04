function argumentInfo() {
  const data = {};

  Array.from(arguments).forEach((element) => {
    let type = typeof element;
    console.log(`${type}: ${element}`);

    if (!data[type]) {
      data[type] = 0;
    }
    data[type]++;
  });

  Object.keys(data)
    .sort((a, b) => data[b] - data[a])
    .forEach((key) => console.log(`${key} = ${data[key]}`));
}

argumentInfo('cat', 42, function () {
  console.log('Hello world!');
});
