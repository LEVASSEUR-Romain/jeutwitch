const countLettre = require("./countLettre");
test("countlettre return 0", () => {
  const word = "hello";
  const search = "z";
  expect(countLettre(word, search)).toEqual(0);
});

test("countlettre return 2", () => {
  const word = "hello";
  const search = "l";
  expect(countLettre(word, search)).toEqual(2);
});
