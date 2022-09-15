const stringValidSome = require("./stringValidSome");

test("stringValidSome false", () => {
  global.filmToFind = "indiana jones";
  const send = "coucou";
  expect(stringValidSome(send)).toEqual(false);
});

test("stringValidSome true and case", () => {
  global.filmToFind = "indiana jones";
  const send = "iNdiana jones";
  expect(stringValidSome(send)).toEqual(true);
});

test("stringValidSome return string", () => {
  global.filmToFind = "indiana jones";
  const send = "indiana janes";
  expect(stringValidSome(send)).toEqual("indiana j?nes");
});
