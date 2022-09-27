const stringValidJustePrix = require("./stringValidJustePrix");
const { setStringFind } = require("../global/global");

test("stringValidJustePrix le text n'est pas un nombre", () => {
  setStringFind(12.8);
  const send = "oooooooooo";
  expect(stringValidJustePrix(send)).toEqual(false);
});
test("stringValidJustePrix valid", () => {
  setStringFind(12.8);
  const send = "12.8";
  expect(stringValidJustePrix(send)).toEqual(true);
});

test("stringValidJustePrix plus grand", () => {
  setStringFind(12.8);
  const send = "8.2";
  expect(stringValidJustePrix(send)).toEqual({
    statut: "clientSend",
    requete: "serveur",
    value: { price: 8.2, up: true },
  });
});

test("stringValidJustePrix plus petit", () => {
  setStringFind(12.8);
  const send = "14.5";
  expect(stringValidJustePrix(send)).toEqual({
    statut: "clientSend",
    requete: "serveur",
    value: { price: 14.5, up: false },
  });
});
