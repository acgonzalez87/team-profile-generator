const Intern = require("../lib/intern.js");

const role = "Intern";
const name = "Anthony";
const id = "70";
const email = "test@test.com";
const school = "480-555-5555";
const intern = new Intern(name, id, email, school);

test("creates an intern object", () => {
  expect(intern.name).toEqual(name);
  expect(intern.id).toEqual(id);
  expect(intern.email).toEqual(email);
});

test("gets intern name", () => {
  expect(intern.getName()).toEqual(name);
});

test("gets intern ID", () => {
  expect(intern.getId()).toEqual(id);
});

test("gets intern email", () => {
  expect(intern.getEmail()).toEqual(email);
});

test("gets intern role", () => {
  expect(intern.getRole()).toEqual(role);
});

test("gets intern office number", () => {
  expect(intern.getSchool()).toEqual(school);
});
