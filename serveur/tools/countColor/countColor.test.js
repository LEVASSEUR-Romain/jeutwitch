const countColor = require("./countColor");

test("countColor", () => {
  const array = [
    { lettre: "a", color: "green" },
    { lettre: "b", color: "green" },
    { lettre: "a", color: "yellow" },
    { lettre: "i", color: "yellow" },
    { lettre: "s", color: "red" },
    { lettre: "s", color: "red" },
    { lettre: "a", color: "red" },
    { lettre: "b", color: "red" },
    { lettre: "l", color: "red" },
    { lettre: "e", color: "red" },
  ];
  expect(countColor(array, "red", "s")).toEqual(2);
});
