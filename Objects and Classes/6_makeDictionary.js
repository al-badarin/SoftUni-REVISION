function createDictionary(data) {
  const dictionary = {};

  for (const jsonStr of data) {
    const entry = JSON.parse(jsonStr);
    Object.assign(dictionary, entry);
  }

  const sortedTerms = Object.keys(dictionary).sort();

  for (const term of sortedTerms) {
    console.log(`Term: ${term} => Definition: ${dictionary[term]}`);
  }
}

createDictionary([
  '{"Coffee":"A hot drink made from the roasted and ground seeds (coffee beans) of a tropical shrub."}',
  '{"Bus":"A large motor vehicle carrying passengers by road, typically one serving the public on a fixed route and for a fare."}',
]);
