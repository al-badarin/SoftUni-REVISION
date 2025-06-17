function createEmployees(input) {
  let employees = {};

  for (let employee of input) {
    employees.number = employee.length;
    employees.person = employee;
    console.log(
      `Name: ${employees.person} -- Personal Number: ${employees.number}`
    );
  }
}
