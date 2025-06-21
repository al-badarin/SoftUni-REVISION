function companyUsers(input) {
  const companies = {};

  for (let line of input) {
    const [company, id] = line.split(' -> ');

    if (!companies.hasOwnProperty(company)) {
      companies[company] = new Set();
    }

    companies[company].add(id);
  }

  const sortedCompanies = Object.entries(companies).sort(([a], [b]) =>
    a.localeCompare(b)
  );

  for (const [companyName, idSet] of sortedCompanies) {
    console.log(companyName);

    for (const id of idSet) {
      console.log(`-- ${id}`);
    }
  }
}

companyUsers([
  'SoftUni -> AA12345',
  'SoftUni -> AA12345',
  'SoftUni -> BB12345',
  'Microsoft -> CC12345',
  'HP -> BB12345',
]);
