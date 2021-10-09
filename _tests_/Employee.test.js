const Employee = require("../lib/Employee.js");

const role = "Employee";
const name = "Anthony";
const id = "70";
const email = "test@test.com";
const employee = new Employee(name, id, email);

test("creates an employee object", () => {
  expect(employee.name).toEqual(name);
  expect(employee.id).toEqual(id);
  expect(employee.email).toEqual(email);
});

test("gets employee name", () => {
  expect(employee.getName()).toEqual(name);
});

test("gets employee ID", () => {
  expect(employee.getId()).toEqual(id);
});

test("gets employee email", () => {
  expect(employee.getEmail()).toEqual(email);
});

test("gets employee role", () => {
  expect(employee.getRole()).toEqual(role);
});
