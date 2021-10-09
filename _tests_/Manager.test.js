const Manager = require("../lib/Manager.js");

const role = "Manager";
const name = "Anthony";
const id = "70";
const email = "test@test.com";
const officeNumber = "480-555-5555";
const manager = new Manager(name, id, email, officeNumber);

test("creates an manager object", () => {
  expect(manager.name).toEqual(name);
  expect(manager.id).toEqual(id);
  expect(manager.email).toEqual(email);
});

test("gets manager name", () => {
  expect(manager.getName()).toEqual(name);
});

test("gets manager ID", () => {
  expect(manager.getId()).toEqual(id);
});

test("gets manager email", () => {
  expect(manager.getEmail()).toEqual(email);
});

test("gets manager role", () => {
  expect(manager.getRole()).toEqual(role);
});

test("gets manager office number", () => {
  expect(manager.getOfficeNumber()).toEqual(officeNumber);
});
