const stringValidSome = require("./stringValidSome");
const { setStringFind } = require("../../tools/global/global");

test("stringValidSome false", () => {
  setStringFind("indiana jones");
  const send = "coucou";
  expect(stringValidSome(send)).toEqual(false);
});

test("stringValidSome send when empty", () => {
  setStringFind("");
  const send = "coucou";
  expect(stringValidSome(send)).toEqual(false);
});

test("stringValidSome true and case", () => {
  setStringFind("indiana jones");
  const send = "iNdiana jones";
  expect(stringValidSome(send)).toEqual(true);
});

test("stringValidSome true 90%", () => {
  setStringFind("indiana jones");
  const send = "iNdiana joner";
  expect(stringValidSome(send)).toEqual(true);
});

test("stringValidSome return string", () => {
  setStringFind("indiana jones");
  const send = "indiana lol";
  expect(stringValidSome(send)).toEqual("indiana ?o???");
});
