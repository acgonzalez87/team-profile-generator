const Engineer = require("../lib/engineer.js");

const role = "Engineer";
const name = "Anthony";
const id = "70";
const email = "test@test.com";
const github = "480-555-5555";
const engineer = new Engineer(name, id, email, github);

test("creates an engineer object", () => {
  expect(engineer.name).toEqual(name);
  expect(engineer.id).toEqual(id);
  expect(engineer.email).toEqual(email);
});

test("gets engineer name", () => {
  expect(engineer.getName()).toEqual(name);
});

test("gets engineer ID", () => {
  expect(engineer.getId()).toEqual(id);
});

test("gets engineer email", () => {
  expect(engineer.getEmail()).toEqual(email);
});

test("gets engineer role", () => {
  expect(engineer.getRole()).toEqual(role);
});

test("gets engineer office number", () => {
  expect(engineer.getGithub()).toEqual(github);
});
