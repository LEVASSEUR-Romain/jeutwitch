const isIncludeInList = require("./isIncludeInList");
const deleteAccent = require("../deleteAccent/deleteAccent");
test("isIncludeInList true", () => {
  const send = deleteAccent("Abaissable");
  expect(isIncludeInList(send)).toEqual(true);
});

test("isIncludeInList false", () => {
  const send = deleteAccent("Abaityable");
  expect(isIncludeInList("Abaityable")).toEqual(false);
});
