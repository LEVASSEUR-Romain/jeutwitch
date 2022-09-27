const deleteAccent = require("./deleteAccent");

test("deleteAccent surpimer accent", () => {
  expect(deleteAccent("éôûT")).toEqual("eout");
});
